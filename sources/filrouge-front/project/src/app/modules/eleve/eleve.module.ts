import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleveRoutingModule } from './eleve-routing.module';
import { EleveDetailsComponent } from './eleve-details/eleve-details.component';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { EleveAddComponent } from './eleve-add/eleve-add.component';
import { ElevePutComponent } from './eleve-put/eleve-put.component';
import { FormsModule } from '@angular/forms';
import { EleveAcceuilComponent } from './eleve-acceuil/eleve-acceuil.component';
import { EleveIndexComponent } from './eleve-index/eleve-index.component';
import { EleveCoursComponent } from './eleve-cours/eleve-cours.component';


@NgModule({
  declarations: [
    EleveDetailsComponent,
    EleveListComponent,
    EleveAddComponent,
    ElevePutComponent,
    EleveAcceuilComponent,
    EleveIndexComponent,
    EleveCoursComponent
  ],
  imports: [
    CommonModule,
    EleveRoutingModule,
    FormsModule
  ],
  exports: [
    EleveListComponent,
    EleveAcceuilComponent,
    EleveAddComponent,
    EleveDetailsComponent,
    ElevePutComponent
  ]
})
export class EleveModule { }
