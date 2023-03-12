import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStudentsComponent } from './dashboard-students.component';
import { Route, RouterModule } from '@angular/router';
import { StudentsResolver } from 'src/app/core/api/resolvers/students.resolver';
import { DashboardStudentCardModule } from '../dashboard-student-card/dashboard-student-card.module';

const routes: Route[] = [
  {
    path:'',
    component:DashboardStudentsComponent,
    resolve: {
      studentsData: StudentsResolver
    }
  }
]

@NgModule({
  declarations: [
    DashboardStudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardStudentCardModule
  ]
})
export class DashboardStudentsModule { }
