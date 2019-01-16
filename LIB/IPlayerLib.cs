using System.Collections.Generic;
using leagueManager.MODEL.Player;

namespace leagueManager.LIB
{
    public interface IPlayerLib
    {
        List<PlayerModel> GetPlayers();
        PlayerModel GetPlayer(long personId);
        PlayerModel AddPlayer(AddPlayerModel model);
        PlayerModel UpdatePlayer(long personId, UpdatePlayerModel model);
        bool DeletePlayer(long personId);
    }
}