import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineLoaderComponent } from './line-loader.component';



@NgModule({
  declarations: [
    LineLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LineLoaderComponent
  ]
})
export class LineLoaderModule { }
