using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PersonagemAnimado.Domain
{
   public interface IRepository<TEntity> where TEntity :EntidadeBase
    {
        void Adicionar(TEntity entity);
        TEntity BuscarPorId(Guid id);
        IEnumerable<TEntity> BuscarTodos();
        void Update(TEntity entity);
        Task Delete(TEntity entity);
    }
}
