import { ILogger } from "./iLogger.service";

export class FileLoggerService implements ILogger{
  constructor(){
    console.log("FileLoggerService Instantiated");
  }
  write(message:string){
    console.log(`File Logger Wirting....${message}`);
  }
}
