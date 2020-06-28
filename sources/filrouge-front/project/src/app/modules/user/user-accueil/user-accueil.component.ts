import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-user-accueil',
  templateUrl: './user-accueil.component.html',
  styleUrls: ['./user-accueil.component.css']
})
export class UserAccueilComponent implements OnInit {
  nbrUser: number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getNbrUser().subscribe(
      res =>{
        this.nbrUser =res;
      }
    )
  }

}
