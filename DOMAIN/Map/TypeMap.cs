using leagueManager.DOMAIN.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace leagueManager.DOMAIN.Map
{
    public class TypeMap : IEntityTypeConfiguration<Type>
    {
        public void Configure(EntityTypeBuilder<Type> builder)
        {
            builder.Property(x => x.Name).HasMaxLength(200);
            builder.Property(x => x.Description).HasMaxLength(2000);

            builder.ToTable("Type");
        }
    }
}