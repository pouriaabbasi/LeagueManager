using leagueManager.DOMAIN.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace leagueManager.DOMAIN.Map
{
    public class LeagueMatchMap : IEntityTypeConfiguration<LeagueMatch>
    {
        public void Configure(EntityTypeBuilder<LeagueMatch> builder)
        {
            builder
                .HasOne(x => x.League)
                .WithMany(x => x.LeagueMatches)
                .HasForeignKey(x => x.LeagueId);

            builder
                .HasOne(x => x.FirstPlayer)
                .WithMany(x => x.FirstPlayers)
                .HasForeignKey(x => x.FirstPlayerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .HasOne(x => x.SecondPlayer)
                .WithMany(x => x.SecondPlayers)
                .HasForeignKey(x => x.SecondPlayerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .HasOne(x => x.WinnerPlayer)
                .WithMany(x => x.WinnerPlayers)
                .HasForeignKey(x => x.WinnerPlayerId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.ToTable("LeagueMatch");
        }
    }
}