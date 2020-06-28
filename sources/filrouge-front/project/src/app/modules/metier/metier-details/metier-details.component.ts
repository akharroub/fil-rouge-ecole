import { Component, OnInit } from '@angular/core';
import { Metier } from 'src/app/model/metier';
import { MetierService } from 'src/app/shared/service/metierService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-metier-details',
  templateUrl: './metier-details.component.html',
  styleUrls: ['./metier-details.component.css']
})
export class MetierDetailsComponent implements OnInit {

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

  suppr(id: number) {
    if(confirm('Voulez-vous vraiment supprimer ce métier ?')) {
      this.metierService.delete(id).subscribe(
        res => {
          console.log('suppression bien effectuée');
          this.router.navigateByUrl('/centre/metier');
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
