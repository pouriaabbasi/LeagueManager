namespace leagueManager.MODEL.League
{
    public class AddPlayerToLeagueModel
    {
        public long Id { get; set; }
        public long LeagueId { get; set; }
        public long PlayerId { get; set; }
    }
}