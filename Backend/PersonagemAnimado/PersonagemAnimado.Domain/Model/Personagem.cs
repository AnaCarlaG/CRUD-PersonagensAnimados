using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Domain.Model
{
    public class Personagem: EntidadeBase
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Genero { get; set; }
        public string? Poderes { get; set; }

        public Filme Filme { get; set; }
    }
}
