using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Domain.Model
{
    public class Filme: EntidadeBase
    {
        public string Nome { get; set; }
        public string Genero { get; set; }
        public string Descricao { get; set; }
        public int ano { get; set; }


        public List<Personagem> Personagens { get; set; }
    }
}
