import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetierRoutingModule } from './metier-routing.module';
import { MetierListComponent } from './metier-list/metier-list.component';
import { MetierAddComponent } from './metier-add/metier-add.component';
import { MetierIndexComponent } from './metier-index/metier-index.component';
import { MetierPutComponent } from './metier-put/metier-put.component';
import { MetierAccueilComponent } from './metier-accueil/metier-accueil.component';
import { FormsModule } from '@angular/forms';
import { MetierDetailsComponent } from './metier-details/metier-details.component';

@NgModule({
    declarations: [
      MetierListComponent, 
      MetierAddComponent, 
      MetierIndexComponent, 
      MetierPutComponent, 
      MetierAccueilComponent, MetierDetailsComponent
    ],
    imports: [
      CommonModule,
      MetierRoutingModule,
      FormsModule
    ],
    exports: [
      MetierListComponent,
      MetierAccueilComponent,
      MetierListComponent
    ]
  })
export class MetierModule { }