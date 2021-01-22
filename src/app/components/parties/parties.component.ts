import { Component, OnInit } from '@angular/core';
import { Party } from 'src/app/models/party.model';
import {PartiesService} from '../../services/parties.service';
import {DetailsPartyComponent} from '../details-party/details-party.component';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  parties?: Party[];

  constructor(private partiesService: PartiesService) { }

  ngOnInit(): void {
    this.partiesService.getAll().subscribe(
      response => {
        console.log(response);
        this.parties = response;
      },
      error => {
        console.log(error);
      });
  }

  onReserved(obj: any){
    console.log('obj', obj);
  }

}
