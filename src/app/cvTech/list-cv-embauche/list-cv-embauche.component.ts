import {Component, OnInit} from '@angular/core';
import {EmbaucheService} from "../Services/EmbaucheService";
import {Personne} from "../../Models/Personne";

@Component({
  selector: 'app-list-cv-embauche',
  templateUrl: './list-cv-embauche.component.html',
  styleUrls: ['./list-cv-embauche.component.css']
})
export class ListCvEmbaucheComponent implements OnInit{
  EmbaucheList : Personne[]=[] ;

  constructor( private EmbaucheService : EmbaucheService) {
  }
  ngOnInit() {
    this.EmbaucheList=this.EmbaucheService.EmbaucheList;
  }





}
