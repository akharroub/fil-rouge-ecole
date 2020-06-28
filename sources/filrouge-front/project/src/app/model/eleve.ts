import {Tuteur} from './tuteur';

export class Eleve {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    tuteur: Tuteur;

    constructor(id?: number, nom?: string, prenom?: string, dateNaissance?: Date, tuteur?: Tuteur) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.tuteur = tuteur;
    }
}
