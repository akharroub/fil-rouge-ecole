import { Component, OnInit } from '@angular/core';
import { Tuteur } from 'src/app/model/tuteur';
import { TuteurService } from 'src/app/shared/service/tuteur.service';

@Component({
  selector: 'app-tuteur-index',
  templateUrl: './tuteur-index.component.html',
  styleUrls: ['./tuteur-index.component.css']
})
export class TuteurIndexComponent implements OnInit {

  tuteurs: Tuteur[];
  constructor(private tuteurService: TuteurService) { }

  ngOnInit() {
    this.tuteurService.getAll().subscribe(res => {
      this.tuteurs = res;
    });
  }

}
