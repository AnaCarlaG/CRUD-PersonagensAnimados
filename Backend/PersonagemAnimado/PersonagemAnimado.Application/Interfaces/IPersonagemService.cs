using PersonagemAnimado.Application.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Application.Interfaces
{
    public interface IPersonagemService
    {
        IEnumerable<PersonagemVM> ObterTodos();
        PersonagemVM ObterPorId(Guid id);
        void Persistir(PersonagemVM personagemVM);
        void Delete(Guid id);
    }
}
