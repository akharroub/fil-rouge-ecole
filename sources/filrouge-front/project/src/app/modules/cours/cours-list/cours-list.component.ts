import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/shared/service/coursService';
import { Router } from '@angular/router';
import { Cours } from 'src/app/model/cours';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {

  monCours: Cours;
  LesCours: Cours[];
  constructor(private coursService: CoursService, private router: Router) { }

  ngOnInit() {
    this.coursService.getAll().subscribe(
      donnees =>{
        this.LesCours = donnees;
    })
  }

  redirectAddCours(){
    this.router.navigateByUrl('/centre/cours/ajouter');
  }

  redirectModif(cours){
    //this.classesService.currentClasse.subscribe( data =>  data = maclasse)

    this.router.navigateByUrl('/centre/cours/update/'+cours.id);
  }

  detail(id:number){
    this.router.navigateByUrl('/centre/cours/detail/'+id);
  }

  
  retour(id:number){
    this.router.navigateByUrl('/centre/cours');
  }

  sup(id:number){
    this.monCours = new Cours(id);
    this.coursService.del(id).subscribe(
      res => {
        this.coursService.getAll().subscribe(
          donnees => {
            this.LesCours = donnees;
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

}
