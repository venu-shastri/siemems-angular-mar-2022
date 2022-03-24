import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit , OnDestroy{


  constructor() { this.counter=0; }

  //state
  counter:number;
  timerRef:any;

  ngOnInit(): void {
     this.timerRef= setInterval(()=>{
       //State Mutation
        this.counter=this.counter+1;
      },1000);
  }
  ngOnDestroy(): void {
      clearInterval(this.timerRef);
  }



}
