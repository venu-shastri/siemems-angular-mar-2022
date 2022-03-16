
//@DecoratorFactory({/*Meta Configuration Details*/})
import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser'
import { AccountsModule } from "./accounts/accounts.module";
import { RootComponent } from "./root/root.component";
import { UtilityModule } from "./utility/utility.module";
@NgModule({
  declarations:[RootComponent],
  imports:[BrowserModule,UtilityModule,AccountsModule],
  exports:[],
  bootstrap:[RootComponent]

})
export class AppModule{

}
