import { error } from 'selenium-webdriver';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

export class BaseService{
    //protected apiControllerURL;
    protected readonly ApiURL;

    constructor(protected http: HttpClient, rota: string)
    {
        //this.apiControllerURL = environment.urlGateway + rota;
        this.ApiURL = environment.urlApi + rota;
    }

    public handleError(error: HttpErrorResponse){
      let errorMessage='';
      // Erro ocorreu no lado do client
      if(error.error instanceof ErrorEvent){
        errorMessage = error.error.message;
      }
      // Erro ocorreu no lado do servidor
      else{
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);

      return throwError(errorMessage);
    }
}
