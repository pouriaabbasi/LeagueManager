using leagueManager.DOMAIN.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace leagueManager.DOMAIN.Map
{
    public class PlayerMap : IEntityTypeConfiguration<Player>
    {
        public void Configure(EntityTypeBuilder<Player> builder)
        {
            builder.Property(x=>x.FirstName).HasMaxLength(100);
            builder.Property(x=>x.LastName).HasMaxLength(100);
            builder.Property(x=>x.Profile).HasMaxLength(500);
            
            builder.ToTable("Player");
        }
    }
}