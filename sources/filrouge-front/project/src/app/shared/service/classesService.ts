import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Classes } from 'src/app/model/classes';

@Injectable({
    providedIn: 'root'
})

export class ClassesService{

    modclasse = new Classes();

    monUrl = 'http://g-ecole.fr:8080';

    constructor(private http: HttpClient) { }


    getAll(): Observable<any> {
        return this.http.get(this.monUrl + '/listeClasses');
    }

    add(classe: Classes): Observable<any> {
        return this.http.post(this.monUrl + '/ajoutClasses', classe);
    }

    update(classe: Classes): Observable<any> {
        return this.http.put(this.monUrl + '/updateClasses', classe);
    }

    getById(id: number): Observable<any> {
        return this.http.get(this.monUrl + '/' + id);
    }

    del(id: number): Observable<any> {
        return this.http.delete(this.monUrl + '/supprimerUneClasses/' + id);
    }

    nbr(): Observable<any> {
        return this.http.get(this.monUrl + '/nbrClasses');
    }
}
