using AutoMapper;
using PersonagemAnimado.Application.ViewModels;
using PersonagemAnimado.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Application.AutoMapper
{
    public class DomainToViewModelMappingProfile: Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<Filme, FilmeVM>();
            CreateMap<Personagem, PersonagemVM>();
        }
    }
}
