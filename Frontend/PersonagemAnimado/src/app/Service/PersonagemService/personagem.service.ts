import { catchError, delay, take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Guid } from 'guid-typescript';
import { Personagem } from 'src/app/Model/Personagem.model';

@Injectable({
  providedIn: 'root',
})
export class PersonagemService extends BaseService {

  public header: HttpHeaders = new HttpHeaders();

  constructor(http: HttpClient) {
    super(http, '/api/Personagem');
  }

  //Get
  public ObterTodos() {
    return this.http.get<Personagem[]>(this.ApiURL).pipe(delay(3000), catchError(this.handleError));
  }

  public ObterPorId(id: Guid) {
    return this.http.get(this.ApiURL + 'obter-por-id/' + id).pipe(take(1));
  }
  public ObterPersonagensFilme(filmeID: Guid) {
    return this.http.get(this.ApiURL + 'obter-por-filmeID/' + filmeID).pipe(take(1), catchError(this.handleError));
  }

  //Post
  public Cadastrar(personagem: Personagem) {
    {
      const httpOptions = {
        headers: this.header,
      };

      return this.http
        .post(this.ApiURL, personagem, httpOptions)
        .pipe(take(1), catchError(this.handleError));
    }
  }
  //Put
  public Atualizar(personagem: Personagem) {
    return this.http.put(this.ApiURL, personagem);
  }
  //Delete
  public Delete(id: Guid) {
    return this.http.delete(this.ApiURL + id).pipe(take(1));
  }
}
