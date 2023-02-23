import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/api/service/auth.service';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent {
  constructor(public authService: AuthService) { }
}
