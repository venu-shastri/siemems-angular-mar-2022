import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userName:string="";
  password:string="";
  email:string="";

  constructor(private loggerService:ConsoleLoggerService) { }

  ngOnInit(): void {
  }

  signup(){

    this.loggerService.write(`${this.userName},${this.password},${this.email}`);
  }
  clear(){
this.userName="";
this.password="";
this.email="";
  }



}
