import { ILogger } from "./iLogger.service";

export class ConsoleLoggerService implements ILogger{
  constructor(){
    console.log("ConsoleLoggerService Instantiated");
  }
  write(message:string){
    console.log(`Console Logger Wirting....${message}`);
  }
}
