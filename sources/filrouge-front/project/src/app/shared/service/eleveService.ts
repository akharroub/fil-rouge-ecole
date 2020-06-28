import { Injectable } from '@angular/core';
import { Eleve } from '../../model/eleve';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EleveService {

    monUrl = 'http://g-ecole.fr:8080/eleves';

    eleves: Eleve;

    constructor(private http: HttpClient) { }

    getById(id: number): Observable<any> {
        return this.http.get(this.monUrl + '/' + id);
    }

    getAll(): Observable<any> {
        return this.http.get(this.monUrl);
    }

    add(eleve: Eleve): Observable<any> {
        return this.http.post(this.monUrl, eleve);
    }

    delete(id: number) {
        return this.http.delete(this.monUrl + '/' + id);
    }

    getNbrEleve(): Observable<any> {
        return this.http.get(this.monUrl + '/total');
    }

    put(eleve: Eleve) {
        return this.http.put(this.monUrl, eleve);
    }

    getListeCours(id: number): Observable<any> {
        return this.http.get(this.monUrl + '/cours/' + id);
    }
}

