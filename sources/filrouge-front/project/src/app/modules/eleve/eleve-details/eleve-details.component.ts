import { Component, OnInit, Input } from '@angular/core';
import { Eleve } from 'src/app/model/eleve';
import { EleveService } from 'src/app/shared/service/eleveService';
import { ActivatedRoute, Router } from '@angular/router';
import { Tuteur } from 'src/app/model/tuteur';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve-details.component.html',
  styleUrls: ['./eleve-details.component.css']
})
export class EleveDetailsComponent implements OnInit {

  eleve: Eleve;
  constructor(private eleveService: EleveService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.eleve = new Eleve();
    this.eleve.tuteur = new Tuteur();
    this.route.paramMap.subscribe(res => {
      let id;
      id = res.get('id');
      console.log(res);
      this.eleveService.getById(id).subscribe(donnees => {
        console.log(donnees);
        this.eleve = donnees;
      });
    });
  }

  suppr(id: number) {
    if (confirm('voulez vous vraiment supprimer cet eleve ?')) {
      this.eleveService.delete(id).subscribe(
        res => {
          this.router.navigateByUrl('/eleve');
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
