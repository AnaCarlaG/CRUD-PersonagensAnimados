using PersonagemAnimado.Application.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Application.Interfaces
{
   public interface IFilmeService
    {
        IEnumerable<FilmeVM> ObterTodos();

        FilmeVM ObterPorId(Guid id);

        void Persistir(FilmeVM filmeVM);

        void Delete(Guid id);
    }
}
