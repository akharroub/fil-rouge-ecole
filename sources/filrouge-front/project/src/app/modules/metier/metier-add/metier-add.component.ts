import { Component, OnInit } from '@angular/core';
import { Metier } from 'src/app/model/metier';
import { MetierService } from 'src/app/shared/service/metierService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metier-add',
  templateUrl: './metier-add.component.html',
  styleUrls: ['./metier-add.component.css']
})
export class MetierAddComponent implements OnInit {

  metier: Metier;
  constructor(private metierService: MetierService, private router: Router) { }

  ngOnInit() {
    this.metier = new Metier();
  }

  addMetier() {
    this.metierService.add(this.metier).subscribe(
      res => {
        this.router.navigateByUrl('centre/metier');
      },
      error => {
        console.log(error);
      }
    );
  }

  clear() {
    this.metier = new Metier;
  }

}
