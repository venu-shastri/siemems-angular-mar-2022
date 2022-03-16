import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { CommunicationService } from './services/communication.service';



@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ComponentAComponent,ComponentBComponent],
  //providers:[{provide:CommunicationService,useClass:CommunicationService}]
  providers:[CommunicationService]
})
export class CommunicationModule { }
