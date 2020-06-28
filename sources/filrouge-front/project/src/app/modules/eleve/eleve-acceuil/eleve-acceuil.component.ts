import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EleveService } from 'src/app/shared/service/eleveService';

@Component({
  selector: 'app-eleve-acceuil',
  templateUrl: './eleve-acceuil.component.html',
  styleUrls: ['./eleve-acceuil.component.css']
})
export class EleveAcceuilComponent implements OnInit {
  nbrEleve: number;

  constructor( private eleveService: EleveService ) { }

  ngOnInit() {
    this.eleveService.getNbrEleve().subscribe(
      res => {
        this.nbrEleve = res;
      });
  }

}
