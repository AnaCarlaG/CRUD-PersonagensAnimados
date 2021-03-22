using PersonagemAnimado.Application.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PersonagemAnimado.Application.Interfaces
{
   public interface IFilmeService
    {
        IList<FilmeVM> ObterTodos();

        FilmeVM ObterPorId(Guid id);

        void Persistir(FilmeVM filmeVM);

        void Delete(Guid id);
    }
}
