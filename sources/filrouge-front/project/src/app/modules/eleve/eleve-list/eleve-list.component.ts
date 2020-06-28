import { Component, OnInit } from '@angular/core';
import { EleveService } from '../../../shared/service/eleveService';
import { Eleve } from '../../../model/eleve';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eleve-list',
  templateUrl: './eleve-list.component.html',
  styleUrls: ['./eleve-list.component.css']
})
export class EleveListComponent implements OnInit {
  eleves: Eleve[];
  constructor(private eleveService: EleveService, private router: Router) { }

  ngOnInit() {
    this.eleveService.getAll().subscribe(
      res => {
        this.eleves = res;
      }
    );
    // this.eleveService.getAll().subscribe(
    //   res => {
    //     this.eleveService.getAll().subscribe(
    //       donnees => {
    //         this.eleves = donnees;
    //       }
    //     );
    //   });
  }

  affiche(id: number) {
    console.log(id);
    this.router.navigateByUrl('/centre/eleve/' + id);
  }

  redirectModif(id: number) {
    this.router.navigateByUrl('/eleve/edit/' + id);
  }
  retour(id:number){
    this.router.navigateByUrl('/centre/eleve');
  }

  suppr(id: number) {
    if (confirm('voulez vous vraiment supprimer cet eleve ?')) {
      this.eleveService.delete(id).subscribe(
        res => {
          this.eleveService.getAll().subscribe(
            donnees => {
              this.eleves = donnees;
            }
          );
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  redirectAddEleve() {
    this.router.navigateByUrl('/eleve');
  }

}
