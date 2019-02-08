using System;
using leagueManager.DOMAIN.Base;

namespace leagueManager.DOMAIN.Entity
{
    public class LeagueMatch : BaseEntity
    {
        public long LeagueId { get; set; }
        public long FirstPlayerId { get; set; }
        public long SecondPlayerId { get; set; }
        public int? FirstPlayerScore { get; set; }
        public int? SecondPlayerScore { get; set; }
        public long? WinnerPlayerId { get; set; }
        public DateTime? MatchDate { get; set; }

        public League League { get; set; }
        public Player FirstPlayer { get; set; }
        public Player SecondPlayer { get; set; }
        public Player WinnerPlayer { get; set; }
    }
}