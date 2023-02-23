import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStatisticsComponent } from './dashboard-statistics.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path:'',
    component:DashboardStatisticsComponent
  }
]
@NgModule({
  declarations: [
    DashboardStatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardStatisticsModule { }
