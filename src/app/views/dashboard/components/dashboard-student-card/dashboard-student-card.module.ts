import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStudentCardComponent } from './dashboard-student-card.component';



@NgModule({
  declarations: [
    DashboardStudentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardStudentCardComponent
  ]
})
export class DashboardStudentCardModule { }
