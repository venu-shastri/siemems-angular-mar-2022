import { NgModule } from "@angular/core";
import { ContainerComponent } from "./container/container.component";
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations:[ContainerComponent, HeaderComponent, MainComponent, FooterComponent, LabelComponent],
  exports:[ContainerComponent,HeaderComponent,MainComponent,FooterComponent,LabelComponent]

})
export class UtilityModule
{

}
