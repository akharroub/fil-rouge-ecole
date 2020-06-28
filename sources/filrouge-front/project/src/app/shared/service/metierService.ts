import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Metier } from '../../model/metier';

@Injectable({
    providedIn: 'root'
})

export class MetierService {

    metier: Metier;

    monUrl = 'http://g-ecole.fr:8080/metiers';

    constructor(private http: HttpClient) { }

    getById(id: number): Observable<any> {
        return this.http.get(this.monUrl + '/' + id);
    }

    getAll(): Observable<any> {
        return this.http.get(this.monUrl);
    }

    add(metier: Metier): Observable<any> {
        return this.http.post(this.monUrl, metier);
    }

    put(metier: Metier) {
        return this.http.put(this.monUrl, metier);
    }

    delete(id: number) {
        return this.http.delete(this.monUrl + '/' + id);
    }

    getNbrMetier(): Observable<any> {
        return this.http.get(this.monUrl + '/total');
    }
}