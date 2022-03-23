import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router} from '@angular/router'
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email:string="";
password:string="";
retypePassword="";
  constructor(private routerService:Router,private apiService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogin(formRef:FormGroup){
    if(formRef.valid){
      this.apiService.validateCrendentials({userName:'tom',password:this.password}).subscribe(
        (result:any)=>{
          console.log(result);
          if(result.message =="Valid Credentials"){
            this.routerService.navigate(["/dashboard",'tom']);
          }
        },
        (error)=>{
          console.log(error);
        },
        ()=>{
          //tracing
          console.log("Request Completed");

        });
    }
    console.log(formRef);
    //Network Api
    //redirect user to Dashboard state
   // this.routerService.navigate(["/dashboard",username]);
  }
}
