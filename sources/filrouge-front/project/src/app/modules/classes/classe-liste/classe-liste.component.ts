import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/model/classes';
import { ClassesService } from 'src/app/shared/service/classesService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe-liste',
  templateUrl: './classe-liste.component.html',
  styleUrls: ['./classe-liste.component.css']
})
export class ClasseListeComponent implements OnInit {

  uneClasse : Classes;
  modClasse : Classes;
  Lesclasses: Classes[];
  constructor(private classesService: ClassesService, private router: Router) { }

  ngOnInit() {
    this.modClasse = new Classes();
    this.classesService.getAll().subscribe(
      donnees => {
        this.Lesclasses = donnees;
    })
  }

  redirectAddClasse() {
    this.router.navigateByUrl('/centre/classes/ajouter');
  }

  redirectModif(maclasse){
    this.router.navigateByUrl('/centre/classes/update/'+maclasse.id+"/"+maclasse.nom);
  }

  affiche(id: number) {
    this.router.navigateByUrl('/centre/classes/' + id);
  }
  retour(id:number){
    this.router.navigateByUrl('/centre/classes');
  }

  sup(id:number){
    this.uneClasse = new Classes(id);
    this.classesService.del(id).subscribe(
      res => {
        this.classesService.getAll().subscribe(
          donnees => {
            this.Lesclasses = donnees;
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
