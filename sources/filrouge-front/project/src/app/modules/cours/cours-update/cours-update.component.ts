import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/shared/service/coursService';
import { MatieresService } from 'src/app/shared/service/matieresService';
import { Router, ActivatedRoute } from '@angular/router';
import { Cours } from 'src/app/model/cours';

@Component({
  selector: 'app-cours-update',
  templateUrl: './cours-update.component.html',
  styleUrls: ['./cours-update.component.css']
})
export class CoursUpdateComponent implements OnInit {


  upCours:Cours;
  constructor(private coursService: CoursService, private matieresService: MatieresService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.upCours = new Cours();
    this.route.paramMap.subscribe(res => {

      console.log(res.get('id'));
      this.coursService.getOne(Number(res.get('id'))).subscribe(
        data => {
          this.upCours = data;
        }
      )
    });
  }


    retour(){
      this.router.navigateByUrl('/centre/cours/liste');
    }
  

  updateC() {
    console.log(this.upCours)
    this.coursService.update(this.upCours).subscribe(
      res => {
        this.router.navigateByUrl('/centre/cours/liste');
      },
      error => {
        console.log(error);
      }
    )
  }

}
