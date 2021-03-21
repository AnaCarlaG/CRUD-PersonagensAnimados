using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Json.Serialization;

namespace PersonagemAnimado.Application.ViewModels
{
    public class PersonagemVM
    {
        public Guid Id { get; set; }
        [Required]
        public string Nome { get; set; }
        public string? Genero { get; set; }
        [Required]
        public string Descricao { get; set; }
        public string? Poderes { get; set; }
        public Guid FilmeId  {get;set;}
    }
}
