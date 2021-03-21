using System;
using System.Collections.Generic;
using System.Text;

namespace PersonagemAnimado.Application.Validadores
{
    public class ValidaCampoViewModel
    {
        public IEnumerable<string> Erros { get; private set; }
        public ValidaCampoViewModel(IEnumerable<string> erros)
        {
            this.Erros = erros;
        }
    }
}
