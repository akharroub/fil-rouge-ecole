import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/shared/service/coursService';
import { Eleve } from 'src/app/model/eleve';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css']
})
export class CoursDetailComponent implements OnInit {

  id: number;
  ListeEleve:Eleve[];
  constructor(private courservice: CoursService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {

      console.log(res.get('id'));
      this.id = Number(res.get('id'));
      this.courservice.getListeEleve(Number(res.get('id'))).subscribe(
        data => {
          this.ListeEleve = data;
        }
      )
    });
  }


  addElvsCours(){
    this.router.navigateByUrl('/centre/cours/ListeCoursElvsAdd/'+this.id);
  }

  retour(){
    this.router.navigateByUrl('/centre/cours/liste');
  }

  sup(idE:number){
    this.courservice.SupElvsListeCours(idE,this.id).subscribe(
      data => {
        this.courservice.getListeEleve(this.id).subscribe(
          data => {
            this.ListeEleve = data;
          }
        )
      }
    )
  }

}
