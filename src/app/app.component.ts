import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'finals_angular_armenta';

  constructor(private router: Router) {
    // Redirect to the registration page on initialization
    this.router.navigate(['/register']);
  }
}
