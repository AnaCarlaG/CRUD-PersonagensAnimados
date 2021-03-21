using PersonagemAnimado.Domain;
using PersonagemAnimado.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Application.Repository
{
    public interface IPersonagemRepository: IRepository<Personagem>
    {
    }
}
