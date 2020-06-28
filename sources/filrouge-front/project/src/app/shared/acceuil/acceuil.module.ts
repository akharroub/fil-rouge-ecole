import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InstitutComponent } from './institut/institut.component';


@NgModule({
  declarations: [
    FirstPageComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    InstitutComponent
    
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule
  ],
  exports: [
    FirstPageComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent
   
  ]
})
export class AcceuilModule { }
