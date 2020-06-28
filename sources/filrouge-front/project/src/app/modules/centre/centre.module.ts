import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentreRoutingModule } from './centre-routing.module';
import { NavBarLeftComponent } from './nav-bar-left/nav-bar-left.component';
import { CentreDetailsComponent } from './centre-details/centre-details.component';
import { EleveModule } from '../eleve/eleve.module';
import { IndexComponent } from './index/index.component';
import { CentreAcceuilComponent } from './centre-acceuil/centre-acceuil.component';


@NgModule({
  declarations: [
  NavBarLeftComponent,
  CentreDetailsComponent,
  IndexComponent,
  CentreAcceuilComponent],
  imports: [
    CommonModule,
    CentreRoutingModule,
    EleveModule
  ],
  exports: [
    NavBarLeftComponent,
    CentreDetailsComponent
  ]
})
export class CentreModule { }
