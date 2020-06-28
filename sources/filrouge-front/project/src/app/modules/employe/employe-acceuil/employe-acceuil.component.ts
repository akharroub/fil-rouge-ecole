import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/service/employeService';

@Component({
  selector: 'app-employe-acceuil',
  templateUrl: './employe-acceuil.component.html',
  styleUrls: ['./employe-acceuil.component.css']
})
export class EmployeAcceuilComponent implements OnInit {

  nbrEmploye: number;
  constructor(private employeService: EmployeService) { }

  ngOnInit() {
    this.employeService.getNbrEmploye().subscribe(
      res => {
        this.nbrEmploye = res;
      });
  }

}
