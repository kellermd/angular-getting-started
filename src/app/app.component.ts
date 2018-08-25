import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <ul class="nav nav-pills">
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
