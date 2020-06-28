export class User {
    id: number;
    nom: string;
    prenom: string;
    role: string;

    constructor(id?: number, nom?: string, prenom?: string, role?: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.role = role;
    }
}
