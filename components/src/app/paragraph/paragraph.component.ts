import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements AfterContentInit {

  constructor() { }

  @ContentChild('span')
  spanRef?:ElementRef;

  ngAfterContentInit(){

    console.log(this.spanRef?.nativeElement);
  }

}
