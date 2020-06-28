import { Component, OnInit } from '@angular/core';
import { TuteurService } from 'src/app/shared/service/tuteur.service';
import { EleveService } from '../../../shared/service/eleveService';
import { Eleve } from 'src/app/model/eleve';
import { Tuteur } from 'src/app/model/tuteur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleve-add',
  templateUrl: './eleve-add.component.html',
  styleUrls: ['./eleve-add.component.css']
})
export class EleveAddComponent implements OnInit {

  tuteurs: Tuteur[];
  eleve: Eleve;
  constructor(private tuteurServ: TuteurService, private eleveServ: EleveService, private router: Router) { }

  ngOnInit() {
    this.eleve = new Eleve();
    this.eleve.tuteur = new Tuteur();
    this.tuteurServ.getAll().subscribe(res => {
      console.log('bonjour');
      this.tuteurServ.getAll().subscribe(
        donnees => {
          this.tuteurs = donnees;
        });
    });
  }

  ajoutEleve() {
    this.eleveServ.add(this.eleve).subscribe(
      res => {
        this.router.navigateByUrl('/centre/eleve');
      },
      error => {
        console.log(error);
      }
    );
  }

}
