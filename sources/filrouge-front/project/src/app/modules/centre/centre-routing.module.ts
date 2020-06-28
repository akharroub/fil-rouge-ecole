import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentreDetailsComponent } from './centre-details/centre-details.component';
import { UserLoginComponent } from '../user/user-login/user-login.component';
import { TuteurListComponent } from '../tuteur/tuteur-list/tuteur-list.component';
import { EleveAcceuilComponent } from '../eleve/eleve-acceuil/eleve-acceuil.component';
import { EleveListComponent } from '../eleve/eleve-list/eleve-list.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentreRoutingModule { }
