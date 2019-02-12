using System;
using System.Collections.Generic;
using leagueManager.DOMAIN.Base;

namespace leagueManager.DOMAIN.Entity
{
    public class League : BaseEntity
    {
        public long TypeId { get; set; }
        public int Iteration { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool IsCompleted { get; set; }
        public string Title { get; set; }
        public long? WinnerPlayerId { get; set; }

        public Type Type { get; set; }
        public ICollection<LeaguePlayer> LeaguePlayers { get; set; }
        public ICollection<LeagueMatch> LeagueMatches { get; set; }
    }
}