// import(s)
import { Component } from "@angular/core";

// decorator
@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light>'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div>
    <router-outlet></router-outlet>
  </div>
  `
})

// class
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}