using AutoMapper;
using PersonagemAnimado.Application.Interfaces;
using PersonagemAnimado.Application.Repository;
using PersonagemAnimado.Application.ViewModels;
using PersonagemAnimado.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Application.Services
{
    public class PersonagemService : IPersonagemService
    {
        private readonly IPersonagemRepository _personagemRepository;
        private readonly IMapper _mapper;

        public PersonagemService(IPersonagemRepository personagemRepository, IMapper mapper)
        {
            this._personagemRepository = personagemRepository;
            this._mapper = mapper;
        }
        public void Delete(Guid id)
        {
            var personagem = _personagemRepository.BuscarPorId(id);
            _personagemRepository.Delete(personagem);
        }

        public PersonagemVM ObterPorId(Guid id)
        {
            return _mapper.Map<PersonagemVM>(_personagemRepository.BuscarPorId(id));
        }

        public IEnumerable<PersonagemVM> ObterTodos()
        {
            var lista = _personagemRepository.BuscarTodos();
            return _mapper.Map<IEnumerable<PersonagemVM>>(lista);
        }

        public void Persistir(PersonagemVM personagemVM)
        {
            var personagem = _mapper.Map<Personagem>(personagemVM);
            if (personagem.id == Guid.Empty)
            {
                _personagemRepository.Adicionar(personagem);
            }
            else 
            {
                _personagemRepository.Update(personagem);
            }
        }
    }
}
