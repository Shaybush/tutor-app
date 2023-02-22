import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderInitComponent } from './loader-init.component';



@NgModule({
  declarations: [
    LoaderInitComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderInitComponent
  ]
})
export class LoaderInitModule { }
