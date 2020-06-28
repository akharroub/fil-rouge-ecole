import { Component, OnInit } from '@angular/core';
import { MetierService } from 'src/app/shared/service/metierService';

@Component({
  selector: 'app-metier-accueil',
  templateUrl: './metier-accueil.component.html',
  styleUrls: ['./metier-accueil.component.css']
})
export class MetierAccueilComponent implements OnInit {

  nbrMetier: number;
  constructor(private metierService: MetierService) { }

  ngOnInit() {
    this.metierService.getNbrMetier().subscribe(
      res => {
        this.nbrMetier = res;
      }
    )
  }

}
