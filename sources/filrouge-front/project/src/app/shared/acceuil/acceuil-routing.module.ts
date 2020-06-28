import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { UserLoginComponent } from 'src/app/modules/user/user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { InstitutComponent } from './institut/institut.component';



const routes: Routes = [
  { path: '', component: FirstPageComponent, children: [
    {path: 'home', component: HomeComponent},
    { path: 'institut', component: InstitutComponent},
    { path: 'login', component: UserLoginComponent},
    { path: 'contact', component: ContactComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuilRoutingModule { }
