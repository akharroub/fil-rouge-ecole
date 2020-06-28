import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/authService';
import { Router } from '@angular/router';
import { EleveService } from 'src/app/shared/service/eleveService';
import { TuteurService } from 'src/app/shared/service/tuteur.service';
import { CoursService } from 'src/app/shared/service/coursService';
import { EmployeService } from 'src/app/shared/service/employeService';
import { MatieresService } from 'src/app/shared/service/matieresService';
import { ClassesService } from 'src/app/shared/service/classesService';

@Component({
  selector: 'app-centre-details',
  templateUrl: './centre-details.component.html',
  styleUrls: ['./centre-details.component.css']
})
export class CentreDetailsComponent implements OnInit {
  isConnected: boolean;
  nbrEleve: number;
  nbrTuteur: number;
  nbrCours: number;
  nbrEmployer: number;
  nbrClasse: number;
  nbrMatiere: number;
  constructor(private tuteurService: TuteurService,
              private coursService: CoursService,
              private employerService: EmployeService,
              private matiereService: MatieresService,
              private classeService: ClassesService,
              private router: Router, private eleveService: EleveService) { }

  ngOnInit() {
    this.eleveService.getNbrEleve().subscribe(res => {
      this.nbrEleve = res;
      console.log(res);
    });
    this.tuteurService.getNbrTuteur().subscribe(res => {
      this.nbrTuteur = res;
      console.log(res);
    });
    this.coursService.nbr().subscribe(res => {
      this.nbrCours = res;
      console.log(res);
    });
    this.employerService.getNbrEmploye().subscribe(res => {
      this.nbrEmployer = res;
      console.log(res);
    });
    this.matiereService.nbr().subscribe(res => {
      this.nbrMatiere = res;
      console.log(res);
    });
    this.classeService.nbr().subscribe(res => {
      this.nbrClasse = res;
      console.log(res);
    });
  }
}
