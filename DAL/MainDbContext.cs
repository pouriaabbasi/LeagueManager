using leagueManager.DOMAIN.Entity;
using leagueManager.DOMAIN.Map;
using Microsoft.EntityFrameworkCore;

namespace leagueManager.DAL
{
    public class MainDbContext : DbContext
    {
        public MainDbContext(DbContextOptions<MainDbContext> options) : base(options) { }

        public MainDbContext() : base() { }
        public DbSet<Type> Types { get; set; }
        public DbSet<Player> Players { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TypeMap());
            modelBuilder.ApplyConfiguration(new PlayerMap());
        }
    }
}