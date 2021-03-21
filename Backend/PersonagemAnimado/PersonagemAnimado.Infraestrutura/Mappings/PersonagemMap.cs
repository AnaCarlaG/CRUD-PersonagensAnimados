using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonagemAnimado.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Infraestrutura.Mappings
{
    public class PersonagemMap : IEntityTypeConfiguration<Personagem>
    {
        public void Configure(EntityTypeBuilder<Personagem> builder)
        {
            builder.HasKey(x => x.id);
            builder.Property(x => x.id).ValueGeneratedOnAdd();
            builder.Property(x => x.Nome).IsRequired();
            builder.Property(x => x.Genero).IsRequired();
            builder.Property(x => x.Descricao).IsRequired();
            builder.Property(x => x.Poderes);

            builder.HasOne(x => x.Filme).WithMany(x => x.Personagens);
        }
    }
}
