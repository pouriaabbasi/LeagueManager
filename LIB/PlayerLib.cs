using System.Collections.Generic;
using leagueManager.LIB.Base;
using leagueManager.MODEL.Player;

namespace leagueManager.LIB
{
    public class PlayerLib : BaseLib, IPlayerLib
    {
        public PlayerModel AddPlayer(AddPlayerModel model)
        {
            var command = $@"
            INSERT INTO Player(
                FirstName,
                LastName,
                Profile)
            OUTPUT Inserted.Id
            VALUES(
                @FirstName,
                @LastName,
                @Profile)";

            var result = ExecCommandScaler<long>(command, model);

            if (result != 0)
                return new PlayerModel
                {
                    Id = result,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Profile = model.Profile
                };

            return null;
        }

        public bool DeletePlayer(long personId)
        {
            throw new System.NotImplementedException();
        }

        public PlayerModel GetPlayer(long personId)
        {
            throw new System.NotImplementedException();
        }

        public List<PlayerModel> GetPlayers()
        {
            throw new System.NotImplementedException();
        }

        public PlayerModel UpdatePlayer(long personId, UpdatePlayerModel model)
        {
            throw new System.NotImplementedException();
        }
    }
}