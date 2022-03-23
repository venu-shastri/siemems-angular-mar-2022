import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService{
  constructor(@Inject('accountsApiBaseAddress') private accountsApiBaseAddress:string,private httpClientRef:HttpClient){

  }

  validateCrendentials(user:any){

   return  this.httpClientRef.post(`${this.accountsApiBaseAddress}/accounts/validate`,user);

  }


}
