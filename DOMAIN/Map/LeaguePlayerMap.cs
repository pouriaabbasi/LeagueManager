using leagueManager.DOMAIN.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace leagueManager.DOMAIN.Map
{
    public class LeaguePlayerMap : IEntityTypeConfiguration<LeaguePlayer>
    {
        public void Configure(EntityTypeBuilder<LeaguePlayer> builder)
        {
            builder
                .HasOne(x => x.League)
                .WithMany(x => x.LeaguePlayers)
                .HasForeignKey(x => x.LeagueId);

            builder
                .HasOne(x => x.Player)
                .WithMany(x => x.LeaguePlayers)
                .HasForeignKey(x => x.PlayerId);

            builder.ToTable("LeaguePlayer");
        }
    }
}