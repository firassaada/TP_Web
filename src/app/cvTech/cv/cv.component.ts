import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../../Models/Personne";
import {CvService} from "../Services/cvService";
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
Personnes : Personne [] =[]

@Input() Personne! :Personne ;
  constructor(private cvService : CvService) {
  }
  ngOnInit() {
  this.Personnes=this.cvService.Personnes
  }
selectedPersonne(personne : Personne) {
    this.Personne=personne ;

}

}
