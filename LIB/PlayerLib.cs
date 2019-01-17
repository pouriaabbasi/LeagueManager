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
            var command = @"
DELETE  FROM Player
WHERE   Id = @Id";

            var result = ExecCommand(command, new { Id = personId });

            return result;
        }

        public PlayerModel GetPlayer(long personId)
        {
            var query = $@"
SELECT  Id,
        FirstName,
        LastName,
        Profile
FROM    Player
WHERE   Id = {personId}";

            var result = FitstOrDefault<PlayerModel>(query);

            return result;
        }

        public List<PlayerModel> GetPlayers()
        {
            var query = @"
SELECT  Id,
        FirstName,
        LastName,
        Profile
FROM    Player";

            var result = GetList<PlayerModel>(query);

            return result;
        }

        public PlayerModel UpdatePlayer(long personId, UpdatePlayerModel model)
        {
            var command = @"
UPDATE  Player
SET     FirstName = @FirstName,
        LastName = @LastName,
        Profile = @Profile
WHERE   Id = @Id";

            var result = ExecCommand(command, model);

            if (result)
                return new PlayerModel
                {
                    Id = model.Id,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Profile = model.Profile
                };

            return null;
        }
    }
}