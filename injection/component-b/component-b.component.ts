import { Component, OnInit,Inject } from '@angular/core';
import { ILogger } from 'src/app/services/iLogger.service';


@Component({
  selector: 'component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  constructor(@Inject("loggerService") private  logger:ILogger) {

    this.logger.write("ComponentBComponent Instantiated");
   }


  ngOnInit(): void {
  }

}
