import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class BaseService{
    //protected apiControllerURL;
    protected readonly ApiURL;

    constructor(protected http: HttpClient, rota: string)
    {
        //this.apiControllerURL = environment.urlGateway + rota;
        this.ApiURL = environment.urlApi + rota;
    }
    
    public handleError(error: any){

    }
}