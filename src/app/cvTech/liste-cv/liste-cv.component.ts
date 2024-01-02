import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../../Models/Personne";

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit{
@Input() Personnes! : Personne []
@Output() event : EventEmitter<Personne> =new EventEmitter<Personne>()
  ngOnInit() {
  }
   selectedPersonne(personne: Personne)  {
  this.event.emit(personne)
}

}
