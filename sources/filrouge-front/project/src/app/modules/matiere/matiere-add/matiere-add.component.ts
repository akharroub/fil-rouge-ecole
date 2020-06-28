import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/model/matiere';
import { MatieresService } from 'src/app/shared/service/matieresService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matiere-add',
  templateUrl: './matiere-add.component.html',
  styleUrls: ['./matiere-add.component.css']
})
export class MatiereAddComponent implements OnInit {

  matiere: Matiere;
  constructor(private matieresService: MatieresService, private router: Router) { }

  ngOnInit() {
    this.matiere = new Matiere();
  }

  ajoutMatiere() {

    this.matieresService.add(this.matiere).subscribe(
      res => {
        this.router.navigateByUrl('centre/matiere/liste');
      },
      error => {
        console.log(error);
      }
    );
  }

}
