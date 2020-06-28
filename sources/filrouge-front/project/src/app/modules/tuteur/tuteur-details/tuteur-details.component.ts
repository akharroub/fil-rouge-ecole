import { Component, OnInit } from '@angular/core';
import { Tuteur } from 'src/app/model/tuteur';
import { ActivatedRoute, Router } from '@angular/router';
import { TuteurService } from 'src/app/shared/service/tuteur.service';
import { Eleve } from 'src/app/model/eleve';


@Component({
  selector: 'app-tuteur-details',
  templateUrl: './tuteur-details.component.html',
  styleUrls: ['./tuteur-details.component.css']
})
export class TuteurDetailsComponent implements OnInit {
  tuteur: Tuteur;

  constructor(private tuteurService: TuteurService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.tuteur = new Tuteur();
    this.route.paramMap.subscribe(res => {
      let id;
      id = res.get('id');
      this.tuteurService.getById(id).subscribe(donnees => {
        console.log(donnees);
        this.tuteur = donnees;
      });
    });
  }

  deleteTuteur(id: number) {
    if (confirm('voulez vous vraiment supprimer ce tuteur ?')) {
      this.tuteurService.delete(id).subscribe(
        res => {
          console.log('suppression bien effectuer');
          this.router.navigateByUrl('/centre/tuteur');
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
