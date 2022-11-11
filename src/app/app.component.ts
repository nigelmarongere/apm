// import(s)
import { Component } from "@angular/core";

// decorator
@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <div>My First Component</div>
  </div>
  `
})

// class
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}