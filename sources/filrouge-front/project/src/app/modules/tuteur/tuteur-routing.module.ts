import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TuteurListComponent } from './tuteur-list/tuteur-list.component';
import { TuteurDetailsComponent } from './tuteur-details/tuteur-details.component';
import { TuteurAjoutComponent } from './tuteur-ajout/tuteur-ajout.component';


const routes: Routes = [
 /*  {path: 'tuteur/:id', component: TuteurDetailsComponent},
  { path: 'tuteurs', component: TuteurListComponent },
  { path: 'tuteur', component: TuteurAjoutComponent }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuteurRoutingModule { }
