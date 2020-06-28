import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/model/matiere';
import { MatieresService } from 'src/app/shared/service/matieresService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matiere-update',
  templateUrl: './matiere-update.component.html',
  styleUrls: ['./matiere-update.component.css']
})
export class MatiereUpdateComponent implements OnInit {
  UpMatiere: Matiere
  constructor(private matieresService: MatieresService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.UpMatiere = new Matiere();
    this.route.paramMap.subscribe(res => {

      console.log(res.get('id'));
      this.UpMatiere.id = Number(res.get('id'));
      this.UpMatiere.label = res.get('label');

    });
  }


  updateM() {
    console.log(this.UpMatiere.label)
    this.matieresService.update(this.UpMatiere).subscribe(
      res => {
        this.router.navigateByUrl('centre/matiere/liste');
      },
      error => {
        console.log(error);
      }
    )
  }
}
