import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  constructor(loggerService:ConsoleLoggerService) {

    this.userName="";
    this.password="";
  }

  onUserNameEdit(value:string){
    this.userName=value;

  }
  onPasswordEdit(value:string){
    this.password=value;

  }

  login():void{
      console.log(this.userName,this.password);
  }
  clear():void{
    this.userName="";
    this.password="";
    console.log(this.userName,this.password);
  }

  ngOnInit(): void {
  }

}
