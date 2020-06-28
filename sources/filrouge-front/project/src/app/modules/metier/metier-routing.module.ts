import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetierListComponent } from './metier-list/metier-list.component';

const routes: Routes = [];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class MetierRoutingModule { }