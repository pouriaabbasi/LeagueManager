using System.Collections.Generic;
using leagueManager.LIB;
using leagueManager.MODEL.League;
using leagueManager.MODEL.Player;
using Microsoft.AspNetCore.Mvc;

namespace leagueManager.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LeagueController : ControllerBase
    {
        private readonly ILeagueLib _leagueLib;
        public LeagueController(ILeagueLib leagueLib)
        {
            _leagueLib = leagueLib;
        }

        [HttpGet]
        public List<LeagueModel> GetLeagues()
        {
            return _leagueLib.GetLeagues();
        }

        [HttpGet("{id}")]
        public LeagueModel GetLeague(long id)
        {
            return _leagueLib.GetLeague(id);
        }

        [HttpPost]
        public LeagueModel AddLeague(AddLeagueModel model)
        {
            return _leagueLib.AddLeague(model);
        }

        [HttpPut("{id}")]
        public LeagueModel UpdateLeague(long id, UpdateLeagueModel model)
        {
            model.Id = id;
            return _leagueLib.UpdateLeague(model);
        }

        [HttpDelete("{id}")]
        public bool DeleteLeague(long id)
        {
            return _leagueLib.DeleteLeague(id);
        }

        [HttpPost]
        public bool AddPlayerToLeague(AddPlayerToLeagueModel model)
        {
            return _leagueLib.AddPlayerToLeague(model);
        }

        [HttpGet]
        public List<PlayerModel> GetLeaguePlayers(long id)
        {
            return _leagueLib.GetLeaguePlayers(id);
        }

        [HttpGet("{id}")]
        public List<LeagueMatchModel> ShowMatches(long id)
        {
            var result = _leagueLib.GetLeagueMatches(id);
            if (result != null && result.Count > 0)
                return result;

            return _leagueLib.GenerateLeagueMatches(id);
        }

        [HttpPut("{id}")]
        public bool SetMatchResult(long id, SetMatchResultModel model)
        {
            model.LeagueMatchId = id;
            return _leagueLib.SetMatchResult(model);
        }
    }
}