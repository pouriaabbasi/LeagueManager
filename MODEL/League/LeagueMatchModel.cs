using System;
using leagueManager.LIB.Base;

namespace leagueManager.MODEL.League
{
    public class LeagueMatchModel
    {
        public long LeagueMatchId { get; set; }
        public long LeagueId { get; set; }
        public long FirstPlayerId { get; set; }
        public string FirstPlayerFullName { get; set; }
        public long SecondPlayerId { get; set; }
        public string SecondPlayerFullName { get; set; }
        public int? FirstPlayerScore { get; set; }
        public int? SecondPlayerScore { get; set; }
        public long? WinnerPlayerId { get; set; }
        public string WinnerPlayerFullName { get; set; }
        public DateTime? MatchDate { get; set; }
        public string MatchDatePersian => MatchDate.ConvertToPersianDate();
    }
}