import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/service/authService';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!(localStorage.getItem('isConnected') &&
            localStorage.getItem('access_token') &&
            localStorage.getItem('current_user'))
        ) {
            localStorage.removeItem('isConnected');
            localStorage.removeItem('access_token');
            localStorage.removeItem('current_user');
            this.router.navigateByUrl('/login');
            return false;
        } else if (Boolean(localStorage.getItem('isConnected'))) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }

}
