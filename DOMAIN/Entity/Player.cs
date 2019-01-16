using leagueManager.DOMAIN.Base;

namespace leagueManager.DOMAIN.Entity
{
    public class Player : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Profile { get; set; }
    }
}