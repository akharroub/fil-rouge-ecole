import { Component, OnInit } from '@angular/core';
import { MetierService } from '../../../shared/service/metierService';
import { Metier } from '../../../model/metier';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-metier-list',
  templateUrl: './metier-list.component.html',
  styleUrls: ['./metier-list.component.css']
})
export class MetierListComponent implements OnInit {
  metiers: Metier[];
  constructor(private metierService: MetierService, private route: Router) { }

  ngOnInit() {
    this.metierService.getAll().subscribe(
      res => {
            this.metiers = res;
          });
  }

  affiche(id: number) {
    console.log(id);
    this.route.navigateByUrl('centre/metier/' + id);
  }

  redirectAddMetier() {
    this.route.navigateByUrl('/metier');
  }

  suppr(id: number) {
    if (confirm('Voulez-vous vraiment vouloir supprimer ce métier ?')) {
      this.metierService.delete(id).subscribe(
        res => {
          this.metierService.getAll().subscribe(
            donnees => {
              this.metiers = donnees;
            }
          );
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
}
