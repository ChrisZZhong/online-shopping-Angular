import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isAdmin:boolean = localStorage.getItem('isAdmin') == "true";
  ngOnInit(): void {

  }
  constructor( public router: Router) {
  }

  logout() {
    localStorage.clear();
    alert('You have been logged out!');
    this.router.navigate(['/login']);
  }
}
