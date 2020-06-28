import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuth } from 'src/app/model/userAuth';
import { AuthService } from 'src/app/shared/service/authService';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: UserAuth;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.user = new UserAuth();
    this.user.username = '';
    this.user.password = '';
  }


  onSubmit() {
    this.authService.login(this.user).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('/home');
      }
    });
  }

}
