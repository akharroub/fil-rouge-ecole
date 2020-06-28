import { Component, OnInit } from '@angular/core';
import { Tuteur } from 'src/app/model/tuteur';
import { Adress } from 'src/app/model/adress';
import { TuteurService } from 'src/app/shared/service/tuteur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tuteur-edit',
  templateUrl: './tuteur-edit.component.html',
  styleUrls: ['./tuteur-edit.component.css']
})
export class TuteurEditComponent implements OnInit {
  tuteur: Tuteur;
  constructor(private tuteurService: TuteurService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.tuteur = new Tuteur();
    this.tuteur.adress = new Adress();
    this.route.paramMap.subscribe(res => {
      let id;
      id = res.get('id');
      this.tuteurService.getById(id).subscribe(donnees => {
        console.log(donnees);
        this.tuteur = donnees;
      });
    });
  }

  editTuteur() {
    this.tuteurService.put(this.tuteur).subscribe(
      res => {
        this.router.navigateByUrl('/centre/tuteur/' + this.tuteur.id);
      },
      error => {
        console.log(error);
      }
    );
  }

}
