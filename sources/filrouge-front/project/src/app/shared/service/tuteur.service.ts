import { Injectable } from '@angular/core';
import { Eleve } from 'src/app/model/eleve';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tuteur } from 'src/app/model/tuteur';

@Injectable({
  providedIn: 'root'
})

export class TuteurService {
  monUrl = 'http://g-ecole.fr:8080/tuteurs';

  eleves: Eleve;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<any> {
    return this.http.get(this.monUrl + '/' + id);
  }

  getAll(): Observable<any> {
    return this.http.get(this.monUrl);
  }

  add(tuteur: Tuteur): Observable<any>  {
    return this.http.post(this.monUrl, tuteur);
  }

  getNbrTuteur(): Observable<any> {
    return this.http.get(this.monUrl + '/total');
  }

  put(tuteur: Tuteur) {
    return this.http.put(this.monUrl, tuteur);
  }

  delete(id: number) {
    return this.http.delete(this.monUrl + '/' + id);
  }
}

