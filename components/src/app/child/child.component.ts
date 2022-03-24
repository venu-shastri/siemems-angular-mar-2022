import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit ,OnChanges{

  constructor() { }

  value:number=0;
  refresh(){

    this.value= Math.random();
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
  ngOnInit(): void {
  }

}
