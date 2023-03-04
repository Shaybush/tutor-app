import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // constructor(public authService: AuthService) { }

  loadingInPage: boolean = true;

  constructor(public router: Router) {
    this.router.events.subscribe(event => {

      // navigation start
      if (event instanceof NavigationStart) {
        this.loadingInPage = true;
      }

      // navigation end
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingInPage = false;
      }
    });
  }
}
