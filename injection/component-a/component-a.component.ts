import { Component, OnInit,Inject } from '@angular/core';
import { windowWhen } from 'rxjs';
import { ApiLoggerService } from 'src/app/services/apiLogger.service';

import { ILogger } from 'src/app/services/iLogger.service';

@Component({
  selector: 'component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  providers:[
    {provide:"loggerService",useClass:ApiLoggerService}

  ]
})
export class ComponentAComponent implements OnInit {

  constructor(@Inject("loggerService") private logger:ILogger) {

    this.logger.write("ComponentAComponent Instantiated");
   }

  ngOnInit(): void {
  }

}
