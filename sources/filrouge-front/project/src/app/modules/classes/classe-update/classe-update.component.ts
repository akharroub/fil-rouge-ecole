import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/model/classes';
import { ClassesService } from 'src/app/shared/service/classesService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classe-update',
  templateUrl: './classe-update.component.html',
  styleUrls: ['./classe-update.component.css']
})
export class ClasseUpdateComponent implements OnInit {

  UpClasse: Classes;
  Lesclasses: Classes[];
  constructor(private classesService: ClassesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.UpClasse = new Classes();
    this.route.paramMap.subscribe(res => {

      console.log(res.get('id'));
      this.UpClasse.id = Number(res.get('id'));
      this.UpClasse.nom = res.get('nom');

    });
  }


  updateC() {
    console.log(this.UpClasse.nom)
    this.classesService.update(this.UpClasse).subscribe(
      res => {
        this.router.navigateByUrl('/classes');
      },
      error => {
        console.log(error);
      }
    )
  }

}
