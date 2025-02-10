import { Component } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';

import { NavbarComponent } from "./components/navbar/navbar.component";

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatBadgeModule,
    NavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor() { }

}
