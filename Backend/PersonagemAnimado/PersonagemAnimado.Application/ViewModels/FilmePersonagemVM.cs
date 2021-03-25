using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Json.Serialization;

namespace PersonagemAnimado.Application.ViewModels
{
   public class FilmePersonagemVM
    {
        public Guid Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Genero { get; set; }
        [Required]
        public string Descricao { get; set; }
        public int? ano { get; set; }

        public List<PersonagemVM> Personagens { get; set; }
    }
}
