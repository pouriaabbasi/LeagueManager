using System;

namespace leagueManager.MODEL.League
{
    public class SetMatchResultModel
    {
        public long LeagueMatchId { get; set; }

        public int FirstPlayerScore { get; set; }
        public int SecondPlayerScore { get; set; }
        public DateTime MatchDate { get; set; }
    }
}