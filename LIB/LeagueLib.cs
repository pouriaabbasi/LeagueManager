using System.Collections.Generic;
using leagueManager.LIB.Base;
using leagueManager.MODEL.League;

namespace leagueManager.LIB
{
    public class LeagueLib : BaseLib, ILeagueLib
    {
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


    }
}