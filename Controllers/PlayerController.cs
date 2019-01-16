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

        // [HttpGet]
        // public List<TypeModel> GetTypes()
        // {
        //     return _typeLib.GetTypes();
        // }

        // [HttpGet("{id}")]
        // public TypeModel GetType(long id)
        // {
        //     return _typeLib.GetType(id);
        // }

        [HttpPost]
        public PlayerModel AddPlayer([FromBody]AddPlayerModel model)
        {
            return _playerLib.AddPlayer(model);
        }

        // [HttpPut("{id}")]
        // public TypeModel UpdateType(long id, [FromBody]UpdateTypeModel model)
        // {
        //     return _typeLib.UpdateType(id, model);
        // }

        // [HttpDelete("{id}")]
        // public bool DeleteType(long id)
        // {
        //     return _typeLib.DeleteType(id);
        // }
    }
}