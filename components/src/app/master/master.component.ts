import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  books=['Angular','TypeScript','Node'];
  constructor() { }

  addNewBook(bookName:string){

    //this.books.push(bookName);
    this.books=[...this.books,bookName];
    console.log(this.books);
  }
  ngOnInit(): void {
  }

}
