//this will contain all the routing information.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutUsComponent } from './aboutus/.component';
// import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
{path: 'aboutus', component:AboutusComponent},
{path: 'contactus', component:ContactusComponent},
{path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routeComponents=[HomeComponent,AboutusComponent,ContactusComponent, LoginComponent];