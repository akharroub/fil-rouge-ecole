import { Matiere } from './matiere';

export class Cours{

    id: number;
    label:string;
    prix: number;
    matiere: Matiere;

     constructor(id?: number, label?: string, prix?: number,matiere?:Matiere) {
         this.id = id;
         this.label = label;
         this.prix = prix;
         this.matiere = matiere;
     }
 }