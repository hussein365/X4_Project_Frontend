
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type0 } from '../models/type0.model';
import { Type8 } from '../models/type8model';
import { Type7 } from '../models/type7.model';
import { Type6 } from '../models/type6.model';
import { Type5 } from '../models/type5.model';
import { Type4 } from '../models/type4.model';
import { Type1 } from '../models/type1.model';
import { Type2 } from '../models/type2.model';
import { Type3 } from '../models/type3.model';



@Injectable({
  providedIn: 'root'
})
export class TypeService {

  type0_api:string='http://localhost:8080/api/type_0';
  type1_api:string='http://localhost:8080/api/type_1';
  type2_api:string='http://localhost:8080/api/type_2';
  type3_api:string='http://localhost:8080/api/type_3';
  type4_api:string='http://localhost:8080/api/type_4';
  type5_api:string='http://localhost:8080/api/type_5';
  type6_api:string='http://localhost:8080/api/type_6';
  type7_api:string='http://localhost:8080/api/type_7';
  type8_api:string='http://localhost:8080/api/type_8';

  constructor(private http: HttpClient) {}

  getType0s():Observable<Type0[]> {
    return   this.http.get<Type0[]>(this.type0_api);
}
getType1s():Observable<Type1[]> {
  return   this.http.get<Type1[]>(this.type1_api);
}
getType2s():Observable<Type2[]> {
  return   this.http.get<Type2[]>(this.type2_api);
}
getType3s():Observable<Type3[]> {
  return   this.http.get<Type3[]>(this.type3_api);
}
getType4s():Observable<Type4[]> {
  return   this.http.get<Type4[]>(this.type4_api);
}
getType5s():Observable<Type5[]> {
  return   this.http.get<Type5[]>(this.type5_api);
}
getType6s():Observable<Type6[]> {
  return   this.http.get<Type6[]>(this.type6_api);
}
getType7s():Observable<Type7[]> {
  return   this.http.get<Type7[]>(this.type7_api);
}
getType8s():Observable<Type8[]> {
  return   this.http.get<Type8[]>(this.type8_api);
}
}