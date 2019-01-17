using System;
using leagueManager.LIB.Base;

namespace leagueManager.MODEL.League
{
    public class LeagueModel
    {
        public long Id { get; set; }
        public long TypeId { get; set; }
        public int Iteration { get; set; }
        public DateTime StartDate { get; set; }
        public string StartDatePersian => StartDate.ConvertToPersianDate();
        public DateTime? EndDate { get; set; }
        public string EndDatePersian => EndDate.ConvertToPersianDate();
        public bool IsCompleted { get; set; }
        public string Title { get; set; }
    }
}