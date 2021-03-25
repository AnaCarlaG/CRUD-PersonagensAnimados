using Microsoft.EntityFrameworkCore;
using PersonagemAnimado.Application.Repository;
using PersonagemAnimado.Domain.Model;
using PersonagemAnimado.Infraestrutura.Data;
using PersonagemAnimado.Infraestrutura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PersonagemAnimado.Infraestrutura.Repository
{
    public class PersonagemRepository : Repository<Personagem>, IPersonagemRepository
    {
        public readonly Context _context;
        public PersonagemRepository(Context context) : base(context)
        {
            this._context = context;
        }
    }
}
