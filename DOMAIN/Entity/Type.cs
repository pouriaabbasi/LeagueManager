using System.Collections.Generic;
using leagueManager.DOMAIN.Base;

namespace leagueManager.DOMAIN.Entity
{
    public class Type : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int P2PPlayCount { get; set; }
        public bool IsContinuous { get; set; }

        public ICollection<League> Leagues { get; set; }
    }
}