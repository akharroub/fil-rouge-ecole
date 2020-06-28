import { Component, OnInit } from '@angular/core';
import { TuteurService } from 'src/app/shared/service/tuteur.service';
import { Tuteur } from 'src/app/model/tuteur';
import { Router } from '@angular/router';
import { Adress } from 'src/app/model/adress';

@Component({
  selector: 'app-tuteur-ajout',
  templateUrl: './tuteur-ajout.component.html',
  styleUrls: ['./tuteur-ajout.component.css']
})
export class TuteurAjoutComponent implements OnInit {

  constructor(private tuteurService: TuteurService, private router: Router) { }
  tuteur: Tuteur;

  ngOnInit() {
    this.tuteur = new Tuteur();
    this.tuteur.adress = new Adress();
  }

  ajoutTuteur() {
    this.tuteurService.add(this.tuteur).subscribe(
      res => {
        this.router.navigateByUrl('/centre/tuteur');
      },
      error => {
        console.log(error);
      }
    );
  }

  clear() {
    this.tuteur = new Tuteur();
  }
}
