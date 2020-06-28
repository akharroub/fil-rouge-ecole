import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClasseListeComponent } from './classe-liste/classe-liste.component';
import { ClasseAddComponent } from './classe-add/classe-add.component';
import { FormsModule } from '@angular/forms';
import { ClasseUpdateComponent } from './classe-update/classe-update.component';
import { ClassesAcceuilComponent } from './classes-acceuil/classes-acceuil.component';
import { ClasseIndexComponent } from './classe-index/classe-index.component';
import { ClasseDetailsComponent } from './classe-details/classe-details.component';


@NgModule({
  declarations: [
    ClasseListeComponent,
     ClasseAddComponent,
     ClasseUpdateComponent,
     ClassesAcceuilComponent,
     ClasseIndexComponent,
     ClasseDetailsComponent
    ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    FormsModule
  ],
  exports: [
    ClasseListeComponent,
    ClasseAddComponent,
    ClasseUpdateComponent,
    ClassesAcceuilComponent,
    ClasseIndexComponent,
    ClasseDetailsComponent
  ]
})
export class ClassesModule { }
