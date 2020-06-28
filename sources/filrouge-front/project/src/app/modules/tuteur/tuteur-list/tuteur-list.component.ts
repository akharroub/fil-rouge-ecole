import { Component, OnInit } from '@angular/core';
import { Tuteur } from 'src/app/model/tuteur';
import { TuteurService } from 'src/app/shared/service/tuteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tuteur-list',
  templateUrl: './tuteur-list.component.html',
  styleUrls: ['./tuteur-list.component.css']
})
export class TuteurListComponent implements OnInit {
  tuteurs: Tuteur[];

  constructor(private tuteurService: TuteurService, private route: Router) { }

  ngOnInit() {
    console.log('coucou');
    this.tuteurService.getAll().subscribe(
      res => {
        this.tuteurs = res;
      });
    }

  affiche(id: number) {
    console.log(id);
    this.route.navigateByUrl('/centre/tuteur/' + id);
  }

  redirectAddTuteur() {
    this.route.navigateByUrl('/tuteur');
  }
  retour(id:number){
    this.route.navigateByUrl('/centre/tuteur');
  }

  suppr(id: number) {
    if (confirm('voulez vous vraiment supprimer cet eleve ?')) {
      this.tuteurService.delete(id).subscribe(
        res => {
          this.tuteurService.getAll().subscribe(
            donnees => {
              this.tuteurs = donnees;
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
