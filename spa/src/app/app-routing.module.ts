import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { SignupComponent } from './accounts/signup/signup.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserCanDeactivate } from './route-guards/userCanDeactivate.guard';


const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home",component:HomeComponent , children:[
    {path:"login" , component:LoginComponent},
    {path:"signup" , component:SignupComponent},

  ]},
  {path:"dashboard/:username",component:DashboardComponent, canDeactivate:[UserCanDeactivate],
    children:[
      {path:'customers',loadChildren:()=>import('./customers/customers.module').then(m=>m.CustomersModule)},
      {path:'projects',loadChildren:()=>import('./projects/projects.module').then(m=>m.ProjectsModule)}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
