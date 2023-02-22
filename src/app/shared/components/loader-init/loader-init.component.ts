import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-init',
  templateUrl: './loader-init.component.html',
  styleUrls: ['./loader-init.component.scss']
})
export class LoaderInitComponent {
@Input() loading!:boolean;
}
