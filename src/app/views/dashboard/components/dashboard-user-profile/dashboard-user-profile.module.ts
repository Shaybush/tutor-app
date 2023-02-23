import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserProfileComponent } from './dashboard-user-profile.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path:'',
    component:DashboardUserProfileComponent
  }
]
@NgModule({
  declarations: [
    DashboardUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    DashboardUserProfileComponent
  ]
})
export class DashboardUserProfileModule { }
