import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit , OnChanges{

  @Input()
  data:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

}
