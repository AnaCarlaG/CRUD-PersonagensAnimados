using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PersonagemAnimado.Domain.Model;
using PersonagemAnimado.Infraestrutura.Mappings;

namespace PersonagemAnimado.Infraestrutura.Data
{
    public class Context: DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        public DbSet<Filme> Filme { get; set; }
        public DbSet<Personagem> Personagem { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new FilmeMap());
            modelBuilder.ApplyConfiguration(new PersonagemMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}
