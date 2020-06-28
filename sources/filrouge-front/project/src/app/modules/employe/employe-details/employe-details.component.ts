import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/model/employe';
import { EmployeService } from 'src/app/shared/service/employeService';
import { ActivatedRoute, Router } from '@angular/router';
import { Metier } from 'src/app/model/metier';
import { Adress } from 'src/app/model/adress';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeComponent implements OnInit {

  employe: Employe;
  constructor(private employeService: EmployeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.employe = new Employe();
    this.employe.metier = new Metier();
    this.employe.adress = new Adress();
    this.route.paramMap.subscribe(res => {
      let id;
      id = res.get('id');
      this.employeService.getById(id).subscribe(donnees => {
        console.log(donnees);
        this.employe = donnees;
      });
    });
  }

  suppr(id: number) {
    if (confirm('voulez-vous vraiment supprimer cet employé ?')) {
      this.employeService.delete(id).subscribe(
        res => {
          console.log('suppression bien effectuée');
          this.router.navigateByUrl('/centre/employe');
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}