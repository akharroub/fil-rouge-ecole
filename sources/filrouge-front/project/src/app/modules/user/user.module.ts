import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserAccueilComponent } from './user-accueil/user-accueil.component';
import { UserAjoutComponent } from './user-ajout/user-ajout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserIndexComponent } from './user-index/user-index.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserAccueilComponent,
    UserAjoutComponent,
    UserDetailsComponent,
    UserListComponent,
    UserIndexComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    UserLoginComponent,
    UserAccueilComponent,
    UserAjoutComponent,
    UserDetailsComponent,
    UserListComponent,
    UserIndexComponent
  ]
})
export class UserModule { }
