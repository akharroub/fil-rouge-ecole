import { Component, OnInit } from '@angular/core';
import { TuteurService } from 'src/app/shared/service/tuteur.service';

@Component({
  selector: 'app-tuteur-acceuil',
  templateUrl: './tuteur-acceuil.component.html',
  styleUrls: ['./tuteur-acceuil.component.css']
})
export class TuteurAcceuilComponent implements OnInit {

  nbrTuteur: number;
  constructor(private tuteurService: TuteurService) { }

  ngOnInit() {
    this.tuteurService.getNbrTuteur().subscribe(
      res => {
      this.nbrTuteur = res;
      });
  }

}
