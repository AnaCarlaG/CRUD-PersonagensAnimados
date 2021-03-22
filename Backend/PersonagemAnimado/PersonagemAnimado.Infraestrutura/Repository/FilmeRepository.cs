using Microsoft.EntityFrameworkCore;
using PersonagemAnimado.Application.Repository;
using PersonagemAnimado.Domain;
using PersonagemAnimado.Domain.Model;
using PersonagemAnimado.Infraestrutura.Data;
using PersonagemAnimado.Infraestrutura.Repository.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonagemAnimado.Infraestrutura.Repository
{
    public class FilmeRepository : Repository<Filme>, IFilmeRepository
    {
        public readonly Context _context;
        public FilmeRepository(Context context): base(context)
        {
            this._context = context;
        }

        public IList<Filme> BuscarTodosComPersonagem()
        {
            var result = this._context.Filme.Include(x => x.Personagens).ToList();
            return result;
        }

    }
}
