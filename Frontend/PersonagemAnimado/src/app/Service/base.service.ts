import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class BaseService{
    //protected apiControllerURL;
    protected ApiURL = 'https://localhost:44336/';

    constructor(protected http: HttpClient, rota: string)
    {
        //this.apiControllerURL = environment.urlGateway + rota;
        this.ApiURL = this.ApiURL + rota;
    }
    
    public handleError(error: any){

    }
}