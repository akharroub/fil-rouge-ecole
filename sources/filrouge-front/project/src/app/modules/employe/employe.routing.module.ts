import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeComponent } from './employe-details/employe-details.component';
import { EmployeAddComponent } from './employe-add/employe-add.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }