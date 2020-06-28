import { Component, OnInit } from '@angular/core';
import { Metier } from 'src/app/model/metier';
import { MetierService } from 'src/app/shared/service/metierService';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-metier-put',
  templateUrl: './metier-put.component.html',
  styleUrls: ['./metier-put.component.css']
})
export class MetierPutComponent implements OnInit {

  metier: Metier;
  constructor(private metierService: MetierService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      let id; 
      id = res.get('id');
      this.metierService.getById(id).subscribe(donnees => {
        console.log(donnees);
        this.metier = donnees;
      });
    });
  }

  putMetier() {
    this.metierService.put(this.metier).subscribe(
      res => {
        this.router.navigateByUrl('/centre/metier/' + this.metier.id);
      },
      error => {
        console.log(error);
      }
    );
  }

}
