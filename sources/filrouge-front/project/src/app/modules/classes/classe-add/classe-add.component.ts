import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/shared/service/classesService';
import { Classes } from 'src/app/model/classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe-add',
  templateUrl: './classe-add.component.html',
  styleUrls: ['./classe-add.component.css']
})
export class ClasseAddComponent implements OnInit {

classe: Classes;
listClasses: Classes[];
  constructor(private classesService: ClassesService, private router: Router) { }

  ngOnInit() {
    this.classe = new Classes();
   
  }

  ajoutClasse() {
    console.log(this.classe.nom)
    this.classesService.add(this.classe).subscribe(
      res => {
        this.router.navigateByUrl('/centre/classes/liste');
      },
      error => {
        console.log(error);
      }

    );
  }

}
