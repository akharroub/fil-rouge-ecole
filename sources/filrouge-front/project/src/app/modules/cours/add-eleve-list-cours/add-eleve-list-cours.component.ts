import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/shared/service/coursService';
import { Router, ActivatedRoute } from '@angular/router';
import { EleveService } from 'src/app/shared/service/eleveService';
import { Eleve } from 'src/app/model/eleve';

@Component({
  selector: 'app-add-eleve-list-cours',
  templateUrl: './add-eleve-list-cours.component.html',
  styleUrls: ['./add-eleve-list-cours.component.css']
})
export class AddEleveListCoursComponent implements OnInit {

  monId:number;
  ideleve: number;
  ListeElv:Eleve[]
  constructor(private eleServ:EleveService, private coursService: CoursService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(res => {

      console.log(res.get('id'));
      this.monId = Number(res.get('id'));
      this.eleServ.getAll().subscribe(
        data => {
          this.ListeElv = data;
        }
      )
    });

  }

  retour(){
    this.router.navigateByUrl('/centre/cours/detail/'+this.monId);
  }

  ajouterEleveCours(){
    this.coursService.editeListeCours(this.ideleve,this.monId).subscribe(
        res => {
          this.router.navigateByUrl('/centre/cours/liste');
        },
        error => {
          console.log(error);
        }
  
    );
  }

}
