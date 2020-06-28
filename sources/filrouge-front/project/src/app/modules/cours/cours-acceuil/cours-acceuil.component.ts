import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/shared/service/coursService';

@Component({
  selector: 'app-cours-acceuil',
  templateUrl: './cours-acceuil.component.html',
  styleUrls: ['./cours-acceuil.component.css']
})
export class CoursAcceuilComponent implements OnInit {

 nbrCours:number;
  constructor(private coursServ:CoursService) { }

  ngOnInit() {
    this.coursServ.nbr().subscribe(
      data =>{
        this.nbrCours = data;
      }
    )
  }

}
