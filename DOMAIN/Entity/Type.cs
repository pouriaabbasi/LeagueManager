using leagueManager.DOMAIN.Base;

namespace leagueManager.DOMAIN.Entity
{
    public class Type : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}