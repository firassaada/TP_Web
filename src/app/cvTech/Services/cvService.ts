import {Personne} from "../../Models/Personne";
import {Injectable} from "@angular/core";
@Injectable({providedIn: "root"})

export class CvService {

   Personnes: Personne[] = [
    new Personne(1,"Firas Saada","assets/images/rotating_card_profile.png",23,"Student" ),
   new Personne(2,"Juan Jolly","assets/images/rotating_card_profile2.png",22,"Consultant"),
     new Personne(3,"Wassim Saada","assets/images/rotating_card_profile3.png",21,"Doctor"),
   ] ;




}
