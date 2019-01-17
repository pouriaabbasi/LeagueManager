using leagueManager.DOMAIN.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace leagueManager.DOMAIN.Map
{
    public class LeagueMap : IEntityTypeConfiguration<League>
    {
        public void Configure(EntityTypeBuilder<League> builder)
        {
            builder
                .HasOne(x => x.Type)
                .WithMany(x => x.Leagues)
                .HasForeignKey(x => x.TypeId);

            builder.Property(x => x.Title).HasMaxLength(200);

            builder.ToTable("League");
        }
    }
}