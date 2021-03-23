import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Guid } from "guid-typescript";
import { Personagem } from 'src/app/Model/Personagem.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService extends BaseService {

  public header: HttpHeaders = new HttpHeaders();
  constructor(http: HttpClient) {
    super(http, '/api/Filme')
  }

  //Get
  public ObterTodos() {
    return this.http.get(this.ApiURL);
  }

  public ObterPorId(id: Guid) {
    return this.http.get(this.ApiURL + id);
  }
  //Post
  public Cadastrar(personagem: Personagem)
  {
    return this.http.post(this.ApiURL,personagem);
  }
  //Put
  public Atualizar(personagem: Personagem)
  {
    return this.http.put(this.ApiURL,personagem);
  }
  //Delete
  public Delete(id: Guid)
  {
    return this.http.delete(this.ApiURL+id);
  }
}
