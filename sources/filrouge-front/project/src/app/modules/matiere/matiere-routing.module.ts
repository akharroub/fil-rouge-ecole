import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatieresListComponent } from './matieres-list/matieres-list.component';
import { MatiereAddComponent } from './matiere-add/matiere-add.component';
import { MatiereUpdateComponent } from './matiere-update/matiere-update.component';


const routes: Routes = [
  {path: 'matieres', component: MatieresListComponent},
  {path: 'matieresAdd', component: MatiereAddComponent},
  {path: 'matieresUpdate/:id/:label', component: MatiereUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiereRoutingModule { }
