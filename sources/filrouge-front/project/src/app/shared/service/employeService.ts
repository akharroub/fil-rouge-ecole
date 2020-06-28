import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from 'src/app/model/employe';

@Injectable({
    providedIn: 'root'
})

export class EmployeService {
 
    monUrl = 'http://g-ecole.fr:8080/employes';

    employe: Employe;

    constructor(private http: HttpClient) { }

    getById(id: number): Observable<any> {
        return this.http.get(this.monUrl + '/' + id);
    }

    getAll(): Observable<any> {
        return this.http.get(this.monUrl);
    }

    add(employe: Employe): Observable<any> {
        return this.http.post(this.monUrl, employe);
    }

    delete(id: number) {
        return this.http.delete(this.monUrl + '/' + id);
    }

    getNbrEmploye(): Observable<any> {
        return this.http.get(this.monUrl + '/total');
    }

    put(employe: Employe) {
        return this.http.put(this.monUrl, employe);
    }
}
