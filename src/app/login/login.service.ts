import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

const apiHost:string = environment.apiHost;
const AUTH_API = apiHost+'oauth/token';
const USER_URI = apiHost+'oauth/check_token';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

}
