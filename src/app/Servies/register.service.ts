import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/Modules/register-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register:RegisterUser=new RegisterUser();
  baseUrl='http://localhost:8080/signup'

  constructor(private http:HttpClient) { }

  registerUser(register:any) : Observable<any>{
    return this.http.post<any>(
      this.baseUrl, register)
  }
}
