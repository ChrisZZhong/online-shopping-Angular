import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Servies/auth.service';
import { Router, RouterLink } from '@angular/router';
import {catchError, of} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  responseData: any;

  constructor(public loginService: AuthService, public router: Router) {
  }

  ngOnInit(): void {

  }

  loginForm = new FormBuilder().group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  })

  /* login response
    "status": "login successfully",
    "message": "Welcome Chris",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDaHJpcyIsInBlcm1pc3Npb25zIjpbeyJhdXRob3JpdHkiOiJhZG1pbiJ9XX0.3b5OV3H9TOsIXOmAwKPj1z5C8AA-gst7gZuMPwLLpVQ"
   */
  loginSubmit() {
    this.loginService.loginUser(this.loginForm.value)
      .pipe(catchError((err) => of([{ err }])))
      .subscribe((response) => {
          this.responseData = response;
          localStorage.setItem('token', this.responseData.token);
          console.log(this.responseData.token);
          this.router.navigate(['/home']);
      }
    );
  }
}
