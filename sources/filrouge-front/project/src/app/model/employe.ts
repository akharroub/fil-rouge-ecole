import {Metier} from './metier';
import { Adress } from './adress';

export class Employe {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    numTel: string;
    metier: Metier;
    adress: Adress;
    email: string;

    constructor(id?: number, nom?: string, prenom?: string, numTel?: string, dateNaissance?: Date, metier?: Metier, adress?: Adress, email?: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.numTel = numTel;
        this.metier = metier;
        this.adress = adress;
        this.email = email;
    }
}