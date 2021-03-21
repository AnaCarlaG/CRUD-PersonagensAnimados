using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using PersonagemAnimado.Application.Validadores;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PersonagemAnimado.Application.Filter
{
    public class ValidacaoModelStateCustom: ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid) 
            {
                var validaCampoModel = new ValidaCampoViewModel(context.ModelState.SelectMany(v => v.Value.Errors).Select(s => s.ErrorMessage));
                context.Result = new BadRequestObjectResult(validaCampoModel);
            }
        }
    }
}
