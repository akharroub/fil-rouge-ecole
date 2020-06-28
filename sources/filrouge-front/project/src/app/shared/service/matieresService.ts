import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matiere } from 'src/app/model/matiere';

@Injectable({
    providedIn: 'root'
})

export class MatieresService{
    monUrl = 'http://g-ecole.fr:8080';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.monUrl+'/listeMatieres');
    }

    add(matiere: Matiere): Observable<any> {
        console.log(matiere.label)
        return this.http.post(this.monUrl+'/ajoutMatieres', matiere);
    }

    update(matiere: Matiere): Observable<any> {
        return this.http.put(this.monUrl+'/updateMatiere', matiere);
    }

    del(id: number): Observable<any> {
        return this.http.delete(this.monUrl+'/supprimerUneMatiere/'+id);
    }

    nbr(): Observable<any> {
        return this.http.get(this.monUrl + '/nbrMatieres');
    }

}
