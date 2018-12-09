import { ClientDTO } from '../model/client-dto';
import { Observable} from 'rxjs';
import { CLIENT_API } from '../app.apiurl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  createUser(clientModel: ClientDTO) {
    console.log(clientModel);
    return this.http.post(`${CLIENT_API}/clients`, clientModel);
  }

  getClients(): Observable<Array<ClientDTO>>  {
    return this.http.get<Array<ClientDTO>>(`${CLIENT_API}/clients`);
  }

}
