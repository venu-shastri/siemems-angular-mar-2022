import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent  implements AfterViewInit{

  viewChildData:string="";
  constructor() {


   }

  @ViewChild('bRef')
  viewChild?:BComponent

  @ViewChild('p')
  paragraph?:ElementRef;

  setMessage(){
    this.viewChild!.message="Hello From Component A Logic";
    console.log(this.paragraph?.nativeElement);
  }
  ngAfterViewInit(){
    this.viewChild?.subcribe(this.callbackFun);
  }

  callbackFun(data:string){
    console.log(data);
    this.viewChildData=`${data}`;
    console.log(this.viewChildData);
  }

  }
