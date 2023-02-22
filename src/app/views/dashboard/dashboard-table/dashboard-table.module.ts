import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTableComponent } from './dashboard-table.component';



@NgModule({
  declarations: [
    DashboardTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardTableComponent
  ]
})
export class DashboardTableModule { }
