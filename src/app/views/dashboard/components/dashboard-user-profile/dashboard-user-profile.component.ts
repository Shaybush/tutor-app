import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/api/service/auth.service';

@Component({
  selector: 'app-dashboard-user-profile',
  templateUrl: './dashboard-user-profile.component.html',
  styleUrls: ['./dashboard-user-profile.component.scss']
})
export class DashboardUserProfileComponent {
  constructor(public authService: AuthService) { }

}
