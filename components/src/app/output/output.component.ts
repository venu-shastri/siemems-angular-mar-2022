import { Component, OnInit,Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnChanges  {

  @Input()
  value:string=""
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


}
