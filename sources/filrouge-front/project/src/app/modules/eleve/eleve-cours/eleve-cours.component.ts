import { Component, OnInit } from '@angular/core';
import { EleveService } from 'src/app/shared/service/eleveService';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/model/cours';

@Component({
  selector: 'app-eleve-cours',
  templateUrl: './eleve-cours.component.html',
  styleUrls: ['./eleve-cours.component.css']
})
export class EleveCoursComponent implements OnInit {

  cours: Cours[];

  constructor(private eleveService: EleveService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      let id;
      id = res.get('id');
      this.eleveService.getListeCours(id).subscribe( donnees => {
        this.cours = donnees;
      },
        error => {
          console.log(error);
        });
    });

  }
}
