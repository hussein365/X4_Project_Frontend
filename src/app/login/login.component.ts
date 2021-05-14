import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoginService } from './login.service';
const TOKEN_KEY = 'auth-token';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()});
  submitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  error = '';
  roles: string[] = [];
  res: any;

  constructor(public formBuilder: FormBuilder,private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
   // convenience getter for easy access to form fields
   get f() {
     return this.loginForm.controls; }

     signOut(): void {
      window.sessionStorage.removeItem(TOKEN_KEY);
    }

    public saveToken(token: string): void {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
      window.sessionStorage.removeItem(TOKEN_KEY);
      return window.sessionStorage.getItem(TOKEN_KEY);
    }

  goToHome(){
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.submitted = true;
    if (
      this.loginForm.controls.username.status != "INVALID" &&
      this.loginForm.controls.password.status != "INVALID"
    ){
       

    }
  }
}


