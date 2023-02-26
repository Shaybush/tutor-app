import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/api/service/auth.service';
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
export class DashboardComponent{
  // constructor(public authService: AuthService) { }

  loadingInPage: boolean = true;
  constructor(public router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.loadingInPage = true;
      }
      if (
        ev instanceof NavigationEnd ||
        ev instanceof NavigationCancel ||
        ev instanceof NavigationError
      ) {
        this.loadingInPage = false;
      }
    });
  }
}
