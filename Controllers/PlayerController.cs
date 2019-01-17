using System.Collections.Generic;
using leagueManager.LIB;
using leagueManager.MODEL.Player;
using leagueManager.MODEL.Type;
using Microsoft.AspNetCore.Mvc;

namespace leagueManager.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly IPlayerLib _playerLib;
        public PlayerController(
            IPlayerLib playerLib)
        {
            _playerLib = playerLib;
        }

        [HttpGet]
        public List<PlayerModel> GetPlayers()
        {
            return _playerLib.GetPlayers();
        }

        [HttpGet("{id}")]
        public PlayerModel GetPlayer(long id)
        {
            return _playerLib.GetPlayer(id);
        }

        [HttpPost]
        public PlayerModel AddPlayer([FromBody]AddPlayerModel model)
        {
            return _playerLib.AddPlayer(model);
        }

        [HttpPut("{id}")]
        public PlayerModel UpdatePlayer(long id, [FromBody]UpdatePlayerModel model)
        {
            return _playerLib.UpdatePlayer(id, model);
        }

        [HttpDelete("{id}")]
        public bool DeletePlayer(long id)
        {
            return _playerLib.DeletePlayer(id);
        }
    }
}