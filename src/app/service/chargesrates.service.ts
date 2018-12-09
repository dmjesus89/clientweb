import { RiskDTO } from '../model/risk-dto';
import { Observable} from 'rxjs';
import { CLIENT_API } from '../app.apiurl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  constructor(private http: HttpClient) { }

  getRisks(): Observable<Array<RiskDTO>>  {
    return this.http.get<Array<RiskDTO>>(`${CLIENT_API}/risks`);
  }

  getById(id: number): Observable<Array<RiskDTO>>  {
    return this.http.get<Array<RiskDTO>>(`${CLIENT_API }/risks/` + id);
  }

}
