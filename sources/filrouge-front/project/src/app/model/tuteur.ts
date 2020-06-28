import { Eleve } from './eleve';
import { Adress } from './adress';

export class Tuteur {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    adress: Adress;
    email: string;
    numTel: number;
    eleve: Eleve[];

    constructor(id?: number, numTel?: number, nom?: string,
                prenom?: string, dateNaissance?: Date, eleve?: Eleve[],
                adress?: Adress, email?: string ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.eleve = eleve;
        this.adress = adress;
        this.numTel = numTel;
    }
}
