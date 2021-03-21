using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonagemAnimado.Application.Interfaces;
using PersonagemAnimado.Application.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonagemAnimado.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonagemController : ControllerBase
    {
        private readonly IPersonagemService _personagemService;

        public PersonagemController(IPersonagemService personagemService)
        {
            this._personagemService = personagemService;
        }
        [HttpPost]
        public IActionResult Persistir([FromBody] PersonagemVM personagemVM)
        {
            try
            {
                _personagemService.Persistir(personagemVM);
                return Created("", personagemVM);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IEnumerable<PersonagemVM> ObterTodos()
        {
            return _personagemService.ObterTodos();
        }
        [HttpGet]
        [Route("obter-por-id/{id}")]
        public PersonagemVM ObterPorId(Guid id)
        {
            return _personagemService.ObterPorId(id);
        }
        [HttpDelete]
        public async Task<IActionResult> Delete([FromRoute] Guid id) 
        {
            try
            {
                _personagemService.Delete(id);
                return Ok(true);
            }
            catch (Exception ex) 
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public IActionResult Atualizar(PersonagemVM personagemVM) 
        {
            try
            {
                _personagemService.Persistir(personagemVM);
                return Ok(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
