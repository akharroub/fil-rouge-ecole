import { Component, OnInit } from '@angular/core';
import { Tuteur } from 'src/app/model/tuteur';
import { Employe } from 'src/app/model/employe';
import { EmployeService } from 'src/app/shared/service/employeService';

@Component({
  selector: 'app-employe-index',
  templateUrl: './employe-index.component.html',
  styleUrls: ['./employe-index.component.css']
})
export class EmployeIndexComponent implements OnInit {

  employes: Employe[];
  constructor(private employeService: EmployeService) { }

  ngOnInit() {
    this.employeService.getAll().subscribe(res => {
      this.employes = res;
    });
  }

}
