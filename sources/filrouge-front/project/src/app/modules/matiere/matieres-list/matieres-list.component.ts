import { Component, OnInit } from '@angular/core';
import { MatieresService } from 'src/app/shared/service/matieresService';
import { Router } from '@angular/router';
import { Matiere } from 'src/app/model/matiere';

@Component({
  selector: 'app-matieres-list',
  templateUrl: './matieres-list.component.html',
  styleUrls: ['./matieres-list.component.css']
})
export class MatieresListComponent implements OnInit {
  supMat: Matiere;
  LesMatieres: Matiere[];
  constructor(private matieresService: MatieresService, private router: Router) { }

  ngOnInit() {
    this.matieresService.getAll().subscribe(
      donnees => {
        this.LesMatieres = donnees;
    })
  }

  redirectAddMatiere(){
    this.router.navigateByUrl('centre/matieres/ajouter');
  }

  redirectModif(modMat:Matiere){
    this.router.navigateByUrl('centre/matieres/update/'+modMat.id+"/"+modMat.label);
  }
  retour(id:number){
    this.router.navigateByUrl('/centre/matiere');
  }

  supM(id: number) {
    this.supMat = new Matiere(id);
    this.matieresService.del(id).subscribe(
      res => {
        this.matieresService.getAll().subscribe(
          donnees => {
            this.LesMatieres = donnees;
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

}
