using System;

namespace leagueManager.MODEL.League
{
    public class AddLeagueModel
    {
        public long TypeId { get; set; }
        public int Iteration { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool IsCompleted { get; set; }
        public string Title { get; set; }
    }
}