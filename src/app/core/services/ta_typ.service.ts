
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ta_typ } from '../models/ta_typ.model';



@Injectable({
  providedIn: 'root'
})
export class Ta_typService {

  api:string='http://localhost:8080/api/ta_typ';
  constructor(private http: HttpClient) {}

  getTa_typs():Observable<Ta_typ[]> {
    return   this.http.get<Ta_typ[]>(this.api);
}
}