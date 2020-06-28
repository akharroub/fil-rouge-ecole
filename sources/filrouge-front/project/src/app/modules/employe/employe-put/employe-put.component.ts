import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/model/employe';
import { EmployeService } from 'src/app/shared/service/employeService';
import { ActivatedRoute, Router } from '@angular/router';
import { Adress } from 'src/app/model/adress';
import { error } from 'protractor';
import { Metier } from 'src/app/model/metier';
import { MetierService } from 'src/app/shared/service/metierService';

@Component({
  selector: 'app-employe-put',
  templateUrl: './employe-put.component.html',
  styleUrls: ['./employe-put.component.css']
})
export class EmployePutComponent implements OnInit {
  employe: Employe;
  metiers: Metier[];
  constructor(private employeService: EmployeService, private metierService: MetierService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.employe = new Employe();
    this.employe.adress = new Adress();
    this.employe.metier = new Metier();
    this.route.paramMap.subscribe(res => {
      let id;
      id = res.get('id');
      this.employeService.getById(id).subscribe(donnees => {
        console.log(donnees);
        this.employe = donnees;
      });
    });

    this.metierService.getAll().subscribe(res => {
      this.metierService.getAll().subscribe(
        donnees => {
          this.metiers = donnees;
        });
      });
  }

  putEmploye() {
    this.employeService.put(this.employe).subscribe(
      res => {
        this.router.navigateByUrl('/centre/employe/' + this.employe.id);
      },
      error => {
        console.log(error);
      }
    );
  }

}
