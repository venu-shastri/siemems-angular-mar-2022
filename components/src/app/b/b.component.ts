import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent  {

  @Input()
  message:string='';

  @Output()
  customEvent=new EventEmitter<string>();


  emitEvent(){
    this.customEvent.emit("Message from Component B");
  }

  registerCallbackFunWithCustomEvent(callBackFn:any){

    this.customEvent.subscribe(callBackFn);

  }
  constructor() { }




}
