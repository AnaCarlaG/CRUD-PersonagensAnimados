import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Guid } from "guid-typescript";
import { Filme } from '../../Model/Filme.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService extends BaseService {


  public header: HttpHeaders = new HttpHeaders();
  constructor(http: HttpClient) {
    super(http, 'api/Filme')
  }

  //Get
  public ObterTodos() : Observable<any>{
    return this.http.get<Filme[]>(this.ApiURL);
  }

  public ObterPorId(id: Guid) {
    return this.http.get(this.ApiURL + id);
  }
  //Post
  public Cadastrar(filme: Filme)
  {
    return this.http.post(this.ApiURL,filme);
  }
  //Put
  public Atualizar(filme: Filme)
  {
    return this.http.put(this.ApiURL,filme);
  }
  //Delete
  public Delete(id: Guid)
  {
    return this.http.delete(this.ApiURL+id);
  }
}
