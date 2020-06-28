import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/shared/service/employeService';
import { Employe } from 'src/app/model/employe';
import { Metier } from 'src/app/model/metier';
import { MetierService } from 'src/app/shared/service/metierService';
import { Adress } from 'src/app/model/adress';

@Component({
  selector: 'app-employe-add',
  templateUrl: './employe-add.component.html',
  styleUrls: ['./employe-add.component.css']
})
export class EmployeAddComponent implements OnInit {

  employe: Employe;
  metiers: Metier[];
  constructor(private employeService: EmployeService, private metierService: MetierService, private router: Router) { }

  ngOnInit() {
    this.employe = new Employe();
    this.employe.metier = new Metier();
    this.employe.adress = new Adress();
    this.metierService.getAll().subscribe(res => {
      this.metierService.getAll().subscribe(
        donnees => {
          this.metiers = donnees;
        });
      }); 
  }

  addEmploye() {
    this.employeService.add(this.employe).subscribe(
      res => {
        this.router.navigateByUrl('centre/employe');
      },
      error => {
        console.log(error);
      }
    );
  }

  clear() {
    this.employe = new Employe();
  }

}
