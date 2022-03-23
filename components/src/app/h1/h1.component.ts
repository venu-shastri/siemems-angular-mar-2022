
import { Component, OnInit, ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom,
  providers:[],/* service visibility - content/view child */
  viewProviders:[], /* service visibility - ViewChild/ViewChildren */,
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class H1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
