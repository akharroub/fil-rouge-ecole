import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/model/employe';
import { EmployeService } from 'src/app/shared/service/employeService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
  employes: Employe[];
  constructor(private employeService: EmployeService, private router: Router) { }

  ngOnInit() {
    this.employeService.getAll().subscribe(
      res => {
        this.employes = res;
      });
  }

  affiche(id: number) {
    console.log(id);
    this.router.navigateByUrl('centre/employe/' + id);
  }

  redirectAddEmploye() {
    this.router.navigateByUrl('/employe');
  }
  retour(id:number){
    this.router.navigateByUrl('/centre/employe');
  }

  // redirectModif(id: number) {
  //   this.router.navigateByUrl('/employe/' + id);
  // }

   suppr(id: number) {
     if (confirm('Voulez-vous vraiment supprimer cet employé ?')) {
       this.employeService.delete(id).subscribe(
         res => {
           this.employeService.getAll().subscribe(
             donnees => {
               this.employes = donnees;
             }
           );
         },
         error => {
           console.log(error);
         }
       );
     }
   }


}
