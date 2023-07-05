import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor( public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please login first!');
      this.router.navigate(['/login']);
      return false;
    }

    let admin = localStorage.getItem('admin');
    if (admin == 'false') {
      alert("You are not allowed to access this page!");
    }
    return admin != 'false';

  }
}
