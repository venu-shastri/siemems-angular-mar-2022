
import { ApiLoggerService } from "./apiLogger.service";
import { ConsoleLoggerService } from "./consoleLogger.service";
import { FileLoggerService } from "./fileLogger.service";
import { ILogger } from "./iLogger.service";

export class CompositeLoggerService implements ILogger{
  loggersList=new Array<ILogger>();

  constructor(){
    console.log("CompositeLoggerService Instantiated");
    this.loggersList.push(new ConsoleLoggerService());
    this.loggersList.push(new FileLoggerService());
    this.loggersList.push(new ApiLoggerService("http://www.siemens.com/api"));
  }
  write(message:string){
    console.log(`Composite Logger MultiCasting....${message}`);
    for(let i=0;i<this.loggersList.length;i++){
        this.loggersList[i].write(message);
    }
  }
}
