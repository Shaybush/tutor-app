import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardTableModule } from "./dashboard-table/dashboard-table.module";
import { DashboardSearchModule } from "./dashboard-search/dashboard-search.module";
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardTableModule,
    DashboardSearchModule
  ]
})
export class DashboardModule { }
