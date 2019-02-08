using System;
using System.Collections.Generic;
using leagueManager.LIB.Base;
using leagueManager.MODEL.League;
using leagueManager.MODEL.Player;

namespace leagueManager.LIB
{
    public class LeagueLib : BaseLib, ILeagueLib
    {
        private readonly ITypeLib _typeLib;

        public LeagueLib(
            ITypeLib typeLib)
        {
            _typeLib = typeLib;
        }

        public LeagueModel AddLeague(AddLeagueModel model)
        {
            var command = $@"
INSERT INTO League(
    TypeId,
    Iteration,
    StartDate,
    EndDate,
    IsCompleted,
    Title)
OUTPUT Inserted.Id
VALUES(
    @TypeId,
    @Iteration,
    @StartDate,
    @EndDate,
    @IsCompleted,
    @Title)";

            var result = ExecCommandScaler<long>(command, model);

            if (result != 0)
                return new LeagueModel
                {
                    Id = result,
                    TypeId = model.TypeId,
                    Iteration = model.Iteration,
                    StartDate = model.StartDate,
                    EndDate = model.EndDate,
                    IsCompleted = model.IsCompleted,
                    Title = model.Title
                };

            return null;
        }

        public bool DeleteLeague(long leagueId)
        {
            var command = $@"
DELETE  FROM League
WHERE   Id = @Id";

            var result = ExecCommand(command, new { Id = leagueId });

            return result;
        }

        public LeagueModel GetLeague(long leagueId)
        {
            var query = $@"
SELECT  Id,
        TypeId,
        Iteration,
        StartDate,
        EndDate,
        IsCompleted,
        Title,
        (SELECT COUNT(*) FROM LeaguePlayer WHERE LeagueId=L.Id) AS PlayerCount
FROM    League AS L
WHERE   Id = {leagueId}";

            var result = FitstOrDefault<LeagueModel>(query);

            return result;
        }

        public List<LeagueModel> GetLeagues()
        {
            var query = @"
SELECT  L.Id,
        L.TypeId,
        L.Iteration,
        L.StartDate,
        L.EndDate,
        L.IsCompleted,
        L.Title,
        T.Name AS TypeName,
        (SELECT COUNT(*) FROM LeaguePlayer WHERE LeagueId=L.Id) AS PlayerCount
FROM    League AS L
        INNER JOIN Type AS T ON L.TypeId = T.Id";

            var result = GetList<LeagueModel>(query);

            return result;
        }

        public LeagueModel UpdateLeague(UpdateLeagueModel model)
        {
            var command = @"
UPDATE  League
SET     TypeId = @TypeId,
        Iteration = @Iteration,
        StartDate = @StartDate,
        EndDate = @EndDate,
        IsCompleted = @IsCompleted,
        Title = @Title
WHERE   Id = @Id";

            var result = ExecCommand(command, model);

            if (result)
                return new LeagueModel
                {
                    Id = model.Id,
                    TypeId = model.TypeId,
                    StartDate = model.StartDate,
                    EndDate = model.EndDate,
                    IsCompleted = model.IsCompleted,
                    Title = model.Title
                };

            return null;
        }

        public bool AddPlayerToLeague(AddPlayerToLeagueModel model)
        {
            var command = @"
INSERT INTO LeaguePlayer(
    LeagueId,
    PlayerId
)
OUTPUT inserted.Id
VALUES(
    @LeagueId,
    @PlayerId
)";
            var result = ExecCommand(command, model);

            return result ? true : false;
        }

        public List<PlayerModel> GetLeaguePlayers(long leagueId)
        {
            var query = $@"
SELECT  P.Id,
        P.FirstName,
        P.LastName,
        P.Profile
FROM    LeaguePlayer AS LP
        INNER JOIN Player AS P ON LP.PlayerId = P.Id
WHERE   LP.LeagueId = {leagueId}";

            var result = GetList<PlayerModel>(query);

            return result;
        }

        public List<LeagueMatchModel> GenerateLeagueMatches(long leagueId)
        {
            var leagueModel = GetLeague(leagueId);
            var typeModel = _typeLib.GetType(leagueModel.TypeId);
            var players = GetLeaguePlayers(leagueModel.Id);

            var matches = GenerateLeagueMatches(leagueId, players, typeModel.P2PPlayCount, typeModel.IsContinuous);

            InsertMatches(matches);

            return GetLeagueMatches(leagueId);
        }

        public List<LeagueMatchModel> GetLeagueMatches(long leagueId)
        {
            var query = @"
SELECT  LM.Id AS LeagueMatchId,
        LM.LeagueId,
        LM.FirstPlayerId,
        FP.FirstName + ' ' + FP.LastName AS FirstPlayerFullName,
        LM.SecondPlayerId,
        SP.FirstName + ' ' + SP.LastName AS SecondPlayerFullName,
        LM.FirstPlayerScore,
        LM.SecondPlayerScore,
        LM.WinnerPlayerId,
        WP.FirstName + ' ' + WP.LastName AS WinnerPlayerFullName,
        LM.MatchDate
FROM    LeagueMatch AS LM
        INNER JOIN Player AS FP ON LM.FirstPlayerId = FP.Id
        INNER JOIN Player AS SP ON LM.SecondPlayerId = SP.Id
        LEFT JOIN Player AS WP ON LM.WinnerPlayerId = WP.Id";

            var result = GetList<LeagueMatchModel>(query);

            return result;
        }

        public bool SetMatchResult(SetMatchResultModel model)
        {
            var command = @"
UPDATE  LeagueMatch
SET     FirstPlayerScore = @FirstPlayerScore,
        SecondPlayerScore = @SecondPlayerScore,
        MatchDate = @MatchDate
WHERE   Id = @LeagueMatchId";

            return ExecCommand(command, model);
        }

        private void InsertMatches(List<LeagueMatchModel> matches)
        {
            var command = @"
INSERT INTO LeagueMatch(
    LeagueId,
    FirstPlayerId,
    SecondPlayerId
)
VALUES(
    @LeagueId,
    @FirstPlayerId,
    @SecondPlayerId
)";
            var result = ExecCommand(command, matches);
        }

        private List<LeagueMatchModel> GenerateLeagueMatches(long leagueId, List<PlayerModel> players, int p2PPlayCount, bool IsContinuous)
        {
            return
                IsContinuous
                    ? GenerateLeagueMatchesContinuously(leagueId, players, p2PPlayCount)
                    : GenerateLeagueMatchesHomeAwayly(leagueId, players, p2PPlayCount);
        }

        private List<LeagueMatchModel> GenerateLeagueMatchesHomeAwayly(long leagueId, List<PlayerModel> players, int p2PPlayCount)
        {
            var result = new List<LeagueMatchModel>();
            players.Shuffle();
            for (int i = 0; i < p2PPlayCount; i++)
                result.AddRange(GenerateMatches(leagueId, players, i % 2 == 0));

            return result;
        }

        private List<LeagueMatchModel> GenerateLeagueMatchesContinuously(long leagueId, List<PlayerModel> players, int p2PPlayCount)
        {
            players.Shuffle();
            var result = new List<LeagueMatchModel>();

            for (int i = 0; i < players.Count; i++)
            {
                for (int j = i + 1; j < players.Count; j++)
                {
                    for (int k = 0; k < p2PPlayCount; k++)
                    {
                        result.Add(new LeagueMatchModel
                        {
                            LeagueId = leagueId,
                            FirstPlayerId = k % 2 == 0 ? players[i].Id : players[j].Id,
                            SecondPlayerId = k % 2 == 0 ? players[j].Id : players[i].Id
                        });
                    }
                }
            }

            return result;
        }

        private List<LeagueMatchModel> GenerateMatches(long leagueId, List<PlayerModel> players, bool isReverse = false)
        {
            var result = new List<LeagueMatchModel>();
            for (int i = 0; i < players.Count; i++)
            {
                for (int j = i + 1; j < players.Count; j++)
                {
                    result.Add(new LeagueMatchModel
                    {
                        LeagueId = leagueId,
                        FirstPlayerId = isReverse ? players[j].Id : players[i].Id,
                        SecondPlayerId = isReverse ? players[i].Id : players[j].Id,
                    });
                }
            }
            return result;
        }
    }
}