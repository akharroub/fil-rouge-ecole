import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './modules/contact/contact.component';
import { FirstPageComponent } from './shared/acceuil/first-page/first-page.component';
import { CentreDetailsComponent } from './modules/centre/centre-details/centre-details.component';
import { UserLoginComponent } from './modules/user/user-login/user-login.component';
import { EleveListComponent } from './modules/eleve/eleve-list/eleve-list.component';
import { EleveAcceuilComponent } from './modules/eleve/eleve-acceuil/eleve-acceuil.component';
import { TuteurListComponent } from './modules/tuteur/tuteur-list/tuteur-list.component';

import { EleveAddComponent } from './modules/eleve/eleve-add/eleve-add.component';
import { EleveDetailsComponent } from './modules/eleve/eleve-details/eleve-details.component';
import { TuteurDetailsComponent } from './modules/tuteur/tuteur-details/tuteur-details.component';
import { TuteurAcceuilComponent } from './modules/tuteur/tuteur-acceuil/tuteur-acceuil.component';
import { EmployeAcceuilComponent } from './modules/employe/employe-acceuil/employe-acceuil.component';
import { EmployeAddComponent } from './modules/employe/employe-add/employe-add.component';
import { EmployeListComponent } from './modules/employe/employe-list/employe-list.component';
import { EmployeComponent } from './modules/employe/employe-details/employe-details.component';
import { CentreAcceuilComponent } from './modules/centre/centre-acceuil/centre-acceuil.component';
import { TuteurIndexComponent } from './modules/tuteur/tuteur-index/tuteur-index.component';
import { TuteurAjoutComponent } from './modules/tuteur/tuteur-ajout/tuteur-ajout.component';
import { HomeComponent } from './shared/acceuil/home/home.component';
import { CoursAcceuilComponent } from './modules/cours/cours-acceuil/cours-acceuil.component';
import { CoursIndexComponent } from './modules/cours/cours-index/cours-index.component';
import { CoursListComponent } from './modules/cours/cours-list/cours-list.component';
import { CoursAddComponent } from './modules/cours/cours-add/cours-add.component';
import { CoursDetailComponent } from './modules/cours/cours-detail/cours-detail.component';
import { CoursUpdateComponent } from './modules/cours/cours-update/cours-update.component';
import { AddEleveListCoursComponent } from './modules/cours/add-eleve-list-cours/add-eleve-list-cours.component';
import { UserIndexComponent } from './modules/user/user-index/user-index.component';
import { UserAccueilComponent } from './modules/user/user-accueil/user-accueil.component';
import { UserListComponent } from './modules/user/user-list/user-list.component';
import { EmployeIndexComponent } from './modules/employe/employe-index/employe-index.component';
import { UserAjoutComponent } from './modules/user/user-ajout/user-ajout.component';
import { UserDetailsComponent } from './modules/user/user-details/user-details.component';
import { TuteurEditComponent } from './modules/tuteur/tuteur-edit/tuteur-edit.component';
import { EmployePutComponent } from './modules/employe/employe-put/employe-put.component';
import { MetierIndexComponent } from './modules/metier/metier-index/metier-index.component';
import { MetierAccueilComponent } from './modules/metier/metier-accueil/metier-accueil.component';
import { MetierAddComponent } from './modules/metier/metier-add/metier-add.component';
import { MetierListComponent } from './modules/metier/metier-list/metier-list.component';
import { MetierDetailsComponent } from './modules/metier/metier-details/metier-details.component';
import { MetierPutComponent } from './modules/metier/metier-put/metier-put.component';
import { EleveIndexComponent } from './modules/eleve/eleve-index/eleve-index.component';
import { ElevePutComponent } from './modules/eleve/eleve-put/eleve-put.component';
import { EleveCoursComponent } from './modules/eleve/eleve-cours/eleve-cours.component';
import { MatrieresIndexComponent } from './modules/matiere/matrieres-index/matrieres-index.component';
import { MatrieresAcceuilComponent } from './modules/matiere/matrieres-acceuil/matrieres-acceuil.component';
import { MatiereUpdateComponent } from './modules/matiere/matiere-update/matiere-update.component';
import { MatieresListComponent } from './modules/matiere/matieres-list/matieres-list.component';
import { MatiereAddComponent } from './modules/matiere/matiere-add/matiere-add.component';
import { ClasseIndexComponent } from './modules/classes/classe-index/classe-index.component';
import { ClassesAcceuilComponent } from './modules/classes/classes-acceuil/classes-acceuil.component';
import { ClasseAddComponent } from './modules/classes/classe-add/classe-add.component';
import { ClasseListeComponent } from './modules/classes/classe-liste/classe-liste.component';
import { ClasseUpdateComponent } from './modules/classes/classe-update/classe-update.component';
import { IndexComponent } from './modules/centre/index/index.component';
import { ClasseDetailsComponent } from './modules/classes/classe-details/classe-details.component';


const routes: Routes = [
    {
    path: 'centre', component: CentreAcceuilComponent, children: [
      {
        path: '', component: IndexComponent, children: [
          { path: '', component: CentreDetailsComponent }
        ]
      },
      {
        path: 'user', component: UserIndexComponent, children: [
          { path: '', component: UserAccueilComponent },
          { path: 'liste', component: UserListComponent },
          { path: 'ajouter', component: UserAjoutComponent },
          { path: ':id', component: UserDetailsComponent }

        ]
      },
      {
        path: 'tuteur', component: TuteurIndexComponent, children: [
          { path: '', component: TuteurAcceuilComponent },
          { path: 'liste', component: TuteurListComponent },
          { path: 'ajouter', component: TuteurAjoutComponent },
          { path: 'modifier/:id', component: TuteurEditComponent },
          { path: ':id', component: TuteurDetailsComponent }
        ]
      },
      {
        path: 'eleve', component: EleveIndexComponent, children: [
          { path: '', component: EleveAcceuilComponent},
          { path: 'ajouter', component: EleveAddComponent },
          { path: 'modifier/:id', component: ElevePutComponent },
          { path: 'liste', component: EleveListComponent },
          { path: ':id', component: EleveDetailsComponent, children: [
            { path: 'cours', component: EleveCoursComponent },
            { path: 'cours/:id', component: EleveCoursComponent }
          ]}
        ]
      },
      {
        path: 'employe', component: EmployeIndexComponent, children: [
          { path: '', component: EmployeAcceuilComponent },
          { path: 'ajouter', component: EmployeAddComponent },
          { path: 'liste', component: EmployeListComponent },
          { path: 'modifier/:id', component: EmployePutComponent },
          { path: ':id', component: EmployeComponent}
        ]
      },
      {
        path: 'metier', component: MetierIndexComponent, children: [
          { path: '', component: MetierAccueilComponent },
          { path: 'liste', component: MetierListComponent },
          { path: 'ajouter', component: MetierAddComponent },
          { path: ':id', component: MetierDetailsComponent },
          { path: 'modifier/:id', component: MetierPutComponent }
        ]
      },     
      {
        path: 'cours', component: CoursIndexComponent, children: [
          { path: '', component: CoursAcceuilComponent },
          { path: 'ajouter', component: CoursAddComponent },
          { path: 'liste', component: CoursListComponent },
          { path: 'detail/:id', component: CoursDetailComponent},
          { path: 'update/:id', component: CoursUpdateComponent},
          { path: 'ListeCoursElvsAdd/:id', component: AddEleveListCoursComponent },
        ]
      },
        {
          path: 'classes', component: ClasseIndexComponent, children: [
            { path: '', component: ClassesAcceuilComponent },
            { path: 'ajouter', component: ClasseAddComponent },
            { path: 'liste', component: ClasseListeComponent },
            { path: 'detail/:id', component: ClasseDetailsComponent },
            { path: 'update/:id/:nom', component: ClasseUpdateComponent }
          ]
        },
        {
          path: 'matiere', component: MatrieresIndexComponent, children: [
            { path: '', component: MatrieresAcceuilComponent },
            { path: 'ajouter', component: MatiereAddComponent },
            { path: 'liste', component: MatieresListComponent },
            { path: 'update/:id', component: MatiereUpdateComponent }
          ]
        }
    ]
  },
  {
    path: '', component: FirstPageComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
