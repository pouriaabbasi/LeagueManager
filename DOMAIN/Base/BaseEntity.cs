using System.ComponentModel.DataAnnotations;

namespace leagueManager.DOMAIN.Base
{
    public class BaseEntity
    {
        [Key]
        public long Id { get; set; }
    }
}