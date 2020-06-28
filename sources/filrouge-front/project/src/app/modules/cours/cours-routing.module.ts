import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursListComponent } from './cours-list/cours-list.component';
import { CoursAddComponent } from './cours-add/cours-add.component';
import { CoursUpdateComponent } from './cours-update/cours-update.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';


const routes: Routes = [
  {path: 'cours', component: CoursListComponent},
  {path: 'coursAdd', component: CoursAddComponent},
  {path: 'coursUpdate/:id', component: CoursUpdateComponent},
  {path: 'coursDetail/:id', component: CoursDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
