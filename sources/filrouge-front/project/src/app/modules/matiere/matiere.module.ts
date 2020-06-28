import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatiereRoutingModule } from './matiere-routing.module';
import { MatieresListComponent } from './matieres-list/matieres-list.component';
import { MatiereAddComponent } from './matiere-add/matiere-add.component';
import { MatiereUpdateComponent } from './matiere-update/matiere-update.component';
import { MatrieresIndexComponent } from './matrieres-index/matrieres-index.component';
import { MatrieresAcceuilComponent } from './matrieres-acceuil/matrieres-acceuil.component';


@NgModule({
  declarations: [
    MatieresListComponent,
    MatiereAddComponent,
    MatiereUpdateComponent,
    MatrieresIndexComponent,
    MatrieresAcceuilComponent
  ],
  imports: [
    CommonModule,
    MatiereRoutingModule,
    FormsModule
  ], exports: [
    MatieresListComponent,
    MatiereAddComponent,
    MatiereUpdateComponent,
    MatrieresIndexComponent,
    MatrieresAcceuilComponent
  ]
})
export class MatiereModule { }
