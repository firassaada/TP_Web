import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../Models/Personne';
import { EmbaucheService } from '../Services/EmbaucheService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() Personne1!: Personne ;
  constructor(private embaucheService: EmbaucheService, private toastr: ToastrService ) {

  }

  ngOnInit() {
    this.Personne1.path="assets/images/rotating_card_profile.png"
  }

  EmbaucheListCheck(personne: Personne) {
    const isAlreadyEmbauched = this.embaucheService.addToEmbaucheList(personne);
    if (isAlreadyEmbauched) {
      this.toastr.warning('Already_embauched', 'Warning', {
        positionClass: 'toast-top-center', // Customize the position
        timeOut: 5000, // Display for 5 seconds
      });
    }
  }
}
