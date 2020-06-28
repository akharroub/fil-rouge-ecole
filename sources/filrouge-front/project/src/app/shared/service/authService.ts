import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { UserAuth } from 'src/app/model/userAuth';
import { Observable, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string;
  subjectConnexion: Subject<number>;
  currentUser: User;
  constructor(private router: Router, private http: HttpClient) {
    this.url = 'http://g-ecole.fr:8080/auth';
    this.subjectConnexion = new Subject<number>();
   }

  isConnected(): boolean {
    return Boolean(localStorage.getItem('isConnected'));
  }

  getCurrentUser(): User {
    const userStr = localStorage.getItem('current_user');
    return JSON.parse(userStr);
  }

  login(user: UserAuth): Observable<boolean> {
    return new Observable(
      observer => {
        this.http.post(this.url, user).subscribe(
          res => {
            console.log(res);
            localStorage.setItem('isConnected', 'true');
            localStorage.setItem('access_token', res['token']);
            const currentUser = new User();
            const helper = new JwtHelperService();

            const decodedToken = helper.decodeToken(res['token']);
            currentUser.id = decodedToken.sub;
            currentUser.nom = decodedToken.username;
            currentUser.role = decodedToken.roles;
            localStorage.setItem('current_user', JSON.stringify(currentUser));

            this.subjectConnexion.next(3);
            /* this.alertService.addSuccess('bienvenu ' + currentUser.nom); */
            observer.next(true);
          },
          err => {
            observer.next(false);
          },
          () => {
            observer.complete();
          });
      });

  }

  logout() {
    localStorage.removeItem('isConnected');
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    this.subjectConnexion.next(3);
    this.router.navigateByUrl('/login');
  }

}
