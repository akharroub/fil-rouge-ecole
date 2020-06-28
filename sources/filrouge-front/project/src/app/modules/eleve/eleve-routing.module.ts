import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EleveListComponent } from './eleve-list/eleve-list.component';
import { EleveAddComponent } from './eleve-add/eleve-add.component';
import { ElevePutComponent } from './eleve-put/eleve-put.component';
import { AuthGuard } from 'src/app/guard/auth-guard';
import { EleveAcceuilComponent } from './eleve-acceuil/eleve-acceuil.component';




const routes: Routes = [
  /* { path: 'eleve', component: EleveAcceuilComponent, canActivate: [AuthGuard], children: [
    { path: 'test', component: EleveListComponent },
    { path: ':id', component: EleveDetailsComponent },
    { path: 'edit/:id', component: ElevePutComponent },
  ]},
  { path: '', component: EleveListComponent, canActivate: [AuthGuard]} */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EleveRoutingModule { }
