using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonagemAnimado.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Infraestrutura.Mappings
{
    public class FilmeMap : IEntityTypeConfiguration<Filme>
    {
        public void Configure(EntityTypeBuilder<Filme> builder)
        {
            builder.HasKey(x => x.id);
            builder.Property(x => x.id).ValueGeneratedOnAdd();
            builder.Property(x => x.Descricao);
            builder.Property(x => x.ano);
            builder.Property(x => x.Genero).IsRequired();
            builder.Property(x => x.Nome).IsRequired();

            builder.HasMany(x => x.Personagens).WithOne(x => x.Filme).HasForeignKey(x => x.FilmeID);
        }
    }
}
