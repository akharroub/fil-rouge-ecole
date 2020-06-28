import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/authService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isConnected: boolean;
  isAdmin: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.isConnected = this.authService.isConnected();
    this.authService.subjectConnexion.subscribe(
      res => {
        this.isConnected = this.authService.isConnected();
       /*  if (this.authService.getCurrentUser()) {
          this.isAdmin = this.authService.getCurrentUser().role === 'ADMIN';
        } */
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
    this.isConnected = false;
  }
  redirectCentre(): void {
    this.router.navigateByUrl('/centre');
  }

}
