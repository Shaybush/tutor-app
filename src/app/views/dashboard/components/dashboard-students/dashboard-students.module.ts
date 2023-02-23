import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStudentsComponent } from './dashboard-students.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path:'',
    component:DashboardStudentsComponent
  }
]

@NgModule({
  declarations: [
    DashboardStudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardStudentsModule { }
