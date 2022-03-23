import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCanDeactivate } from './route-guards/userCanDeactivate.guard';
import { FormsModule } from '@angular/forms';
import {AccountsModule} from './accounts/accounts.module'
import { UtilityModule } from './utility/utility.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccountsModule,
    UtilityModule

  ],
  providers: [UserCanDeactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
