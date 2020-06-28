
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/service/authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'filrouge';
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
    this.router.navigateByUrl('/login');
    this.isConnected = false;
  }

}
