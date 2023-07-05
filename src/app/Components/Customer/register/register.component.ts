import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {catchError, of} from "rxjs";
import { RegisterService } from 'src/app/Servies/register.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  responseData: any;

  constructor(public registerService: RegisterService, public router: Router) {
  }

  ngOnInit(): void {}

  registerForm = new FormBuilder().group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  })

  registerSubmit() {
    this.registerService.registerUser(this.registerForm.value)
      .pipe(catchError((err) => of([{ err }])))
      .subscribe((response) => {
          this.responseData = response;
          alert('You have been registered!');
          this.router.navigate(['/login']);
        }
      );
  }

}
