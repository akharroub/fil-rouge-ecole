import { Component, OnInit } from '@angular/core';
import { Metier } from 'src/app/model/metier';
import { MetierService } from 'src/app/shared/service/metierService';

@Component({
  selector: 'app-metier-index',
  templateUrl: './metier-index.component.html',
  styleUrls: ['./metier-index.component.css']
})
export class MetierIndexComponent implements OnInit {

  metiers: Metier[];
  constructor(private metierService: MetierService) { }

  ngOnInit() {
    this.metierService.getAll().subscribe(res => {
      this.metiers = res;
    })
  }

}
