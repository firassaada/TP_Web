import {Personne} from "../../Models/Personne";
import {CvService} from "./cvService";
import {Injectable} from "@angular/core";
@Injectable( {providedIn : 'root'})
export class EmbaucheService {
  constructor() {}
  EmbaucheList: Personne[] = []
  getEmbaucheList(){
    return this.EmbaucheList
  }
  addToEmbaucheList ( personne:Personne ) : boolean
    {
    const checkEmbauche=this.EmbaucheList.find((per) =>per.id==personne.id) ;
    if(!checkEmbauche) {
    this.EmbaucheList.push(personne) ;
    return true
    }
    return false
    }


}
