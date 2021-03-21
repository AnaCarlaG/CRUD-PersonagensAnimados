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
    public class FilmeService : IFilmeService
    {
        private readonly IFilmeRepository _filmeRepository;
        private readonly IMapper _mapper;

        public FilmeService(IFilmeRepository filmeRepository, IMapper mapper)
        {
            this._filmeRepository = filmeRepository;
            this._mapper = mapper;
        }
        public void Delete(Guid id)
        {
            var filme = _filmeRepository.BuscarPorId(id);
            _filmeRepository.Delete(filme);
        }

        public FilmeVM ObterPorId(Guid id)
        {
            return _mapper.Map<FilmeVM>(_filmeRepository.BuscarPorId(id));
        }

        public IEnumerable<FilmeVM> ObterTodos()
        {

            IEnumerable<Filme> lista = _filmeRepository.BuscarTodos();
            return _mapper.Map<IEnumerable<FilmeVM>>(lista);
        }

        public void Persistir(FilmeVM filmeVM)
        {
            var filme = _mapper.Map<Filme>(filmeVM);
            if (filme.id == Guid.Empty) 
            {
                _filmeRepository.Adicionar(filme);

            }
            else
            {
                _filmeRepository.Update(filme);
            }
        }
    }
}
