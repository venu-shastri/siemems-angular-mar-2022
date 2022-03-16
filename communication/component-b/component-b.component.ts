import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit , OnDestroy {

  dataList=new Array<string>();
  subScriptionRef:any=null;
  constructor(private service:CommunicationService) { }

  //lifeCycle - Hook
  ngOnInit(): void {
    //Component state/Property intialization
    //Startup Code
    this.subScriptionRef=this.service.getObservableRef().subscribe((data)=>{
        this.dataList.push(data);

    });

  }

  ngOnDestroy(): void {
this.subScriptionRef.unSubscribe();
  }

}
