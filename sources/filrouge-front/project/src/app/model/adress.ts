export class Adress {

    rue: string;
    ville: string;
    codePostal: number;
    pays: string;

    constructor(rue?: string, ville?: string, codePostal?: number, pays?: string) {
       this.rue = rue;
       this.ville = ville;
       this.codePostal = codePostal;
       this.pays = pays;
    }
}
