import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasseListeComponent } from './classe-liste/classe-liste.component';
import { ClasseAddComponent } from './classe-add/classe-add.component';
import { ClasseUpdateComponent } from './classe-update/classe-update.component';


const routes: Routes = [
 // {path: 'classes', component:ClasseListeComponent},
  {path: 'classesAdd', component:ClasseAddComponent},
  {path: 'classesUpdate/:id/:nom', component:ClasseUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
