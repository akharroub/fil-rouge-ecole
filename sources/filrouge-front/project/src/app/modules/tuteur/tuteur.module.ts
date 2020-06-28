import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuteurRoutingModule } from './tuteur-routing.module';
import { TuteurDetailsComponent } from './tuteur-details/tuteur-details.component';
import { TuteurAjoutComponent } from './tuteur-ajout/tuteur-ajout.component';
import { TuteurListComponent } from './tuteur-list/tuteur-list.component';
import { FormsModule } from '@angular/forms';
import { TuteurAcceuilComponent } from './tuteur-acceuil/tuteur-acceuil.component';
import { TuteurIndexComponent } from './tuteur-index/tuteur-index.component';
import { TuteurEditComponent } from './tuteur-edit/tuteur-edit.component';


@NgModule({
  declarations: [
    TuteurAjoutComponent,
    TuteurDetailsComponent,
    TuteurListComponent,
    TuteurAcceuilComponent,
    TuteurIndexComponent,
    TuteurEditComponent
  ],
  imports: [
    CommonModule,
    TuteurRoutingModule,
    FormsModule
    
  ],
  exports: [
    TuteurDetailsComponent,
    TuteurListComponent
  ]
})
export class TuteurModule { }
