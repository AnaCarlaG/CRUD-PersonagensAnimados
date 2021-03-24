import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Guid } from "guid-typescript";
import { Filme } from '../../Model/Filme.model';
import { Observable } from 'rxjs';
import {tap, delay, take, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService extends BaseService {


  public header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(http: HttpClient) {
    super(http, 'api/Filme/')
  }

  //Get
  public ObterTodos(){
    return this.http.get<Filme[]>(this.ApiURL).pipe(delay(2000));
  }

  public ObterPorId(id: Guid) {
    return this.http.get(this.ApiURL+"obter-por-id/" + id).pipe(take(1));
  }
  //Post
  public Cadastrar(filme: Filme)
  {
   const httpOptions = {
   headers: this.header
   }
    return this.http.post<any>(this.ApiURL,filme, httpOptions).pipe(catchError(this.handleError));
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
