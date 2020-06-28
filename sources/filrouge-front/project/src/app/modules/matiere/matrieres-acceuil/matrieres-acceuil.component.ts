import { Component, OnInit } from '@angular/core';
import { MatieresService } from 'src/app/shared/service/matieresService';

@Component({
  selector: 'app-matrieres-acceuil',
  templateUrl: './matrieres-acceuil.component.html',
  styleUrls: ['./matrieres-acceuil.component.css']
})
export class MatrieresAcceuilComponent implements OnInit {

  nbrMatieres:number;
  constructor(private matieresService: MatieresService) { }

  ngOnInit() {
    this.matieresService.nbr().subscribe(
      data =>{
        this.nbrMatieres = data;
      }
    )
  }

}
