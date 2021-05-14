
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Masterdata } from '../models/masterdata.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiHost:string='http://localhost:8080/api/page_bmx_masterdata_ta?page=1&size=10';

  constructor(private http: HttpClient) {}

 
getData(): Observable<Masterdata[]> {
  
  return this.http
    .get<any>(this.apiHost);
}
}