using AutoMapper;
using PersonagemAnimado.Application.ViewModels;
using PersonagemAnimado.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Application.AutoMapper
{
    public class ViewModelToDomainMappingProfile: Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            CreateMap<FilmeVM, Filme>();
            CreateMap<FilmePersonagemVM,Filme>();
            CreateMap<PersonagemVM, Personagem>();
        }
    }
}
