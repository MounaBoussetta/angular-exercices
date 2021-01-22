import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Party } from 'src/app/models/party.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-party',
  templateUrl: './details-party.component.html',
  styleUrls: ['./details-party.component.css'],
})
export class DetailsPartyComponent implements OnInit, OnChanges {
  nbrePlacesDispo: any = 0;
  nbreReservations = new FormControl('', []);
  @Input()
  set party(party: Party) {
    this._party = party;
    this.nbrePlacesDispo = party.nb_place;
    this.nbreReservations = new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(this.nbrePlacesDispo)
    ]);
  }
  @Output() reservePlace = new EventEmitter<any>();
  _party?: any = {};

  hideReservation?: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  getErrorMessage() : string {
      return this.nbreReservations.hasError('required')
        ? 'You must enter a value'
        : (this.nbreReservations.hasError('min') ||
          this.nbreReservations.hasError('max'))
        ? 'invalid number'
        : '';
  }

  reserve() {
    if(this.nbreReservations.value <= this.nbrePlacesDispo) {
      this.nbrePlacesDispo = this.nbrePlacesDispo - this.nbreReservations.value;
      var obj = {
        idParty: this._party.id,
        nb_place_dispo: this.nbrePlacesDispo
      }
      this.reservePlace.emit(obj);
      this.nbreReservations.setValue(0);
    }else {
      this.nbreReservations.setValidators(Validators.max(this.nbrePlacesDispo));
    }

  }
}
