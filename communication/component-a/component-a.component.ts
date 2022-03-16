import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  constructor(private service:CommunicationService) { }

  ngOnInit(): void {
  }

  notify(data:string){

    this.service.publish(data);

  }

}
