using Microsoft.AspNetCore.Mvc;
using PersonagemAnimado.Application.Interfaces;
using PersonagemAnimado.Application.Validadores;
using PersonagemAnimado.Application.ViewModels;
using Swashbuckle.AspNetCore.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonagemAnimado.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmeController : Controller
    {
        private readonly IFilmeService _filmeService;

        public FilmeController(IFilmeService filmeService)
        {
            this._filmeService = filmeService;
        }

        [HttpPost]
        public IActionResult Persistir([FromBody] FilmeVM filmeVM)
         {
            try
            {
                _filmeService.Persistir(filmeVM);
                return Created("", filmeVM);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IList<FilmeVM> ObterTodos()
        {
            var result = _filmeService.ObterTodos();
            return result;
        }

        [HttpGet]
        [Route("obter-por-id/{id}")]
        public FilmeVM ObterPorId(Guid id)
        {
            return _filmeService.ObterPorId(id);
        }
        [HttpDelete]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            try
            {
                _filmeService.Delete(id);
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public IActionResult Atualizar(FilmeVM filmeVM)
        {
            try
            {
                _filmeService.Persistir(filmeVM);
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
