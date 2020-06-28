import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
@Injectable({
    providedIn: 'root'
  })
export class UserService{

  monUrl = 'http://g-ecole.fr:8080/users';
    
    constructor(private http: HttpClient){}

    getById(id:number): Observable<any>{
        return this.http.get(this.monUrl +'/' + id);
    }

    getAll(): Observable<any>{
        return this.http.get(this.monUrl);
    }
    add(user: User): Observable<any>  {
        return this.http.post(this.monUrl, user);
      }
    
      getNbrUser(): Observable<any> {
        return this.http.get(this.monUrl + '/total');
      }





}