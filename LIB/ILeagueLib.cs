using System.Collections.Generic;
using leagueManager.MODEL.League;
using leagueManager.MODEL.Player;

namespace leagueManager.LIB
{
    public interface ILeagueLib
    {
        List<LeagueModel> GetLeagues();
        LeagueModel GetLeague(long leagueId);
        LeagueModel AddLeague(AddLeagueModel model);
        LeagueModel UpdateLeague(UpdateLeagueModel model);
        bool DeleteLeague(long leagueId);
        bool AddPlayerToLeague(AddPlayerToLeagueModel model);
        List<PlayerModel> GetLeaguePlayers(long leagueId);
        List<LeagueMatchModel> GenerateLeagueMatches(long leagueId);
        List<LeagueMatchModel> GetLeagueMatches(long leagueId);
        bool SetMatchResult(SetMatchResultModel model);
    }
}