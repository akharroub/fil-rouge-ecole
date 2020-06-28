import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cours } from 'src/app/model/cours';

@Injectable({
    providedIn: 'root'
})

export class CoursService{

    monUrl = 'http://g-ecole.fr:8080';

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.monUrl+'/listeCours');
    }

    getOne(id:number): Observable<any> {
        return this.http.get(this.monUrl+'/afficheUncours/'+id);
    }

    getListeEleve(id:number): Observable<any> {
        return this.http.get(this.monUrl+'/listeElevePourUnCours/'+id);
    }

    add(cours: Cours): Observable<any> {
        return this.http.post(this.monUrl+'/ajoutCours', cours);
    }

    editeListeCours(id1:number,id2:number){
        return this.http.post(this.monUrl+'/addElvsDansCours/'+id1+'/'+id2, "ok");
    }

    SupElvsListeCours(id1:number,id2:number){
        return this.http.delete(this.monUrl+'/delElvsDansCours/'+id1+'/'+id2);
    }

    update(cours: Cours): Observable<any> {
        return this.http.put(this.monUrl+'/updateCours', cours);
    }


    del(id: number): Observable<any> {
        return this.http.delete(this.monUrl+'/supprimerUnCours/'+id);
    }

    nbr(): Observable<any> {
        return this.http.get(this.monUrl + '/nbrCours');
    }

}