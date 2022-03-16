import { Inject, Injectable } from "@angular/core";
import { ILogger } from "./iLogger.service";

@Injectable()
export class ApiLoggerService implements ILogger{
  constructor(@Inject("baseHttpRef")private baseApiUrl:string){
    console.log("ApiLoggerService Instantiated");
  }
  write(message:string){
    console.log(`Api Logger Writing....${message} to ${this.baseApiUrl}`);
  }
}
