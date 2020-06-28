import { Component, OnInit } from '@angular/core';
import { EleveService } from 'src/app/shared/service/eleveService';
import { ActivatedRoute, Router } from '@angular/router';
import { Eleve } from 'src/app/model/eleve';
import { Tuteur } from 'src/app/model/tuteur';

@Component({
  selector: 'app-eleve-put',
  templateUrl: './eleve-put.component.html',
  styleUrls: ['./eleve-put.component.css']
})
export class ElevePutComponent implements OnInit {
  eleve: Eleve;
  constructor(private eleveService: EleveService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.eleve = new Eleve();
    this.eleve.tuteur = new Tuteur();
    this.route.paramMap.subscribe(res => {
      let id;
      id = res.get('id');
      this.eleveService.getById(id).subscribe(donnees => {
        console.log(donnees);
        this.eleve = donnees;
      });
    });
  }

  modifierEleve() {
    this.eleveService.put(this.eleve).subscribe(
      res => {
        this.router.navigateByUrl('/centre/eleve/' + this.eleve.id);
      },
      error => {
        console.log(error);
      }
    );
  }

}
