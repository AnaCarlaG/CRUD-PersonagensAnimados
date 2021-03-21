using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Application.ViewModels
{
    public class PersonagemVM
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string Genero { get; set; }
        public string Descricao { get; set; }
        public string Poderes { get; set; }
    }
}
