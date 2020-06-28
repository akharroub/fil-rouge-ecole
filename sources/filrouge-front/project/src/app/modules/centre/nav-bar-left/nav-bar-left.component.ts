import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-left',
  templateUrl: './nav-bar-left.component.html',
  styleUrls: ['./nav-bar-left.component.css']
})
export class NavBarLeftComponent implements OnInit {
  isConnected: boolean;

  constructor(private authService: AuthService, private router: Router) { }

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
}
