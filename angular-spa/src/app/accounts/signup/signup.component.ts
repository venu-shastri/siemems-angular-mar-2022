import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userName:string="";
  password:string="";
  email:string="";

  constructor() { }

  ngOnInit(): void {
  }

  signup(){

    console.log(this.userName,this.password,this.email);
  }
  clear(){
this.userName="";
this.password="";
this.email="";
  }



}
