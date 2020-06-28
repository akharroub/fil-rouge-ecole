import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/shared/service/coursService';
import { Router } from '@angular/router';
import { MatieresService } from 'src/app/shared/service/matieresService';
import { Matiere } from 'src/app/model/matiere';
import { Cours } from 'src/app/model/cours';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cours-add',
  templateUrl: './cours-add.component.html',
  styleUrls: ['./cours-add.component.css']
})
export class CoursAddComponent implements OnInit {

  monCours: Cours;
  maMat: Matiere;
  idmat:number;
  LesMatieres: Matiere[];
  constructor(private coursService: CoursService, private matieresService: MatieresService, private router: Router) {
 

   }

  ngOnInit() {
    this.maMat = new Matiere();
    this.monCours = new Cours();
    this.matieresService.getAll().subscribe(
      donnees => {
        this.LesMatieres = donnees;
      }
    )
  }
  
  
  ajoutCours() {
    console.log(this.idmat)
    this.maMat.id = this.idmat;
    this.monCours.matiere = this.maMat;
    this.coursService.add(this.monCours).subscribe(
      res => {
        this.router.navigateByUrl('/centre/cours/liste');
      },
      error => {
        console.log(error);
      }

    );
  }


}
