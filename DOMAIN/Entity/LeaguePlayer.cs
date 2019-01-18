using leagueManager.DOMAIN.Base;

namespace leagueManager.DOMAIN.Entity
{
    public class LeaguePlayer : BaseEntity
    {
        public long LeagueId { get; set; }
        public long PlayerId { get; set; }

        public League League { get; set; }
        public Player Player { get; set; }
    }
}