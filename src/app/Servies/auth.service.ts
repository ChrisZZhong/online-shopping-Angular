import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Modules/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login:Login=new Login();
  baseUrl='http://localhost:8080/login'
  constructor(private http:HttpClient) { }

  loginUser(login:any) : Observable<any>{
    return this.http.post<any>(
      this.baseUrl, login)
  }

}
