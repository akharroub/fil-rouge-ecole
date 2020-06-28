import { Component, OnInit } from '@angular/core';
import { TuteurService } from 'src/app/shared/service/tuteur.service';
import { AuthService } from 'src/app/shared/service/authService';
import { EleveService } from 'src/app/shared/service/eleveService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centre-acceuil',
  templateUrl: './centre-acceuil.component.html',
  styleUrls: ['./centre-acceuil.component.css']
})
export class CentreAcceuilComponent implements OnInit {
  isConnected: boolean;
  user: string;

  constructor(private tuteurService: TuteurService,
              private authService: AuthService,
              private router: Router, private eleveService: EleveService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('current_user')).nom;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
    this.isConnected = false;
  }

}
