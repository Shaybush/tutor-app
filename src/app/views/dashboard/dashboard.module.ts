import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/api/service/auth.service';
import { DashboardSidebarModule } from './components/dashboard-sidebar/dashboard-sidebar.module';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,    
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./components/dashboard-user-profile/dashboard-user-profile.module').then(m => m.DashboardUserProfileModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('./components/dashboard-statistics/dashboard-statistics.module').then(m => m.DashboardStatisticsModule)
      },
      {
        path: 'students',
        loadChildren: () => import('./components/dashboard-students/dashboard-students.module').then(m => m.DashboardStudentsModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardSidebarModule
  ],
  providers: [AuthService]
})
export class DashboardModule { }
