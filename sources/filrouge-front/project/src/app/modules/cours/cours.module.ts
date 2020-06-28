import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CoursRoutingModule } from './cours-routing.module';
import { CoursListComponent } from './cours-list/cours-list.component';
import { CoursAddComponent } from './cours-add/cours-add.component';
import { CoursUpdateComponent } from './cours-update/cours-update.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';
import { CoursAcceuilComponent } from './cours-acceuil/cours-acceuil.component';
import { CoursIndexComponent } from './cours-index/cours-index.component';
import { AddEleveListCoursComponent } from './add-eleve-list-cours/add-eleve-list-cours.component';


@NgModule({
  declarations: [CoursListComponent, CoursAddComponent, CoursUpdateComponent, CoursDetailComponent, CoursAcceuilComponent, CoursIndexComponent, AddEleveListCoursComponent],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class CoursModule { }
