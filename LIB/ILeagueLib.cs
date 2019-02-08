using System.Collections.Generic;
using leagueManager.MODEL.League;

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
    }
}