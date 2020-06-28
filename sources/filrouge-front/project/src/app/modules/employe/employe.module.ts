import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe.routing.module';
import { EmployeComponent } from './employe-details/employe-details.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { FormsModule } from '@angular/forms';
import { EmployeAcceuilComponent } from './employe-acceuil/employe-acceuil.component';
import { EmployeAddComponent } from './employe-add/employe-add.component';
import { EmployeIndexComponent } from './employe-index/employe-index.component';
import { EmployePutComponent } from './employe-put/employe-put.component';


@NgModule({
  declarations: [
    EmployeComponent,
    EmployeListComponent,
    EmployeAcceuilComponent,
    EmployeAddComponent,
    EmployeIndexComponent,
    EmployePutComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    FormsModule
  ],
  exports: [
    EmployeComponent,
    EmployeListComponent,
    EmployeAcceuilComponent,
    EmployeIndexComponent
  ]
})
export class EmployeModule { }
