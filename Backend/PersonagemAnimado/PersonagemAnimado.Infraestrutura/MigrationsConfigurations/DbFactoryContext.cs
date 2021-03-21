using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using PersonagemAnimado.Infraestrutura.Data;

namespace PersonagemAnimado.Infraestrutura.MigrationsConfigurations
{
    public class DbFactoryContext : IDesignTimeDbContextFactory<Context>
    {
        public Context CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<Context>();
            optionsBuilder.UseSqlServer("Server=DESKTOP-NC75SIE\\SQLEXPRESS;Database=PersonagemAnimado;Trusted_Connection=True;");
            Context context = new Context(optionsBuilder.Options);

            return context;
        }
    }
}
