import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personne} from "../../Models/Personne";

@Component({
  selector: 'app-item -cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
@Input()  peronne! : Personne
  @Output() event : EventEmitter<Personne> =new EventEmitter<Personne>()
selectedPersonne() {
  this.event.emit(
    this.peronne
  )
}

}
