import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/shared/service/classesService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes-acceuil',
  templateUrl: './classes-acceuil.component.html',
  styleUrls: ['./classes-acceuil.component.css']
})
export class ClassesAcceuilComponent implements OnInit {

  nbrClasses: number;
  constructor(private classesService: ClassesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.classesService.nbr().subscribe(
      data => {
        this.nbrClasses = data;
      }
    );

  }
  redirectAddClasse() {
    this.router.navigateByUrl('/centre/classes/ajouter');
  }

}
