// import(s)
import { Component } from "@angular/core";

// decorator
@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})

// class
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}