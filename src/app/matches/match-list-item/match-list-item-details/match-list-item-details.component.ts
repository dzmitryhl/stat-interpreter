import { Detail } from './../../../model/detail';
import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-match-list-item-details',
  templateUrl: './match-list-item-details.component.html',
  styleUrls: ['./match-list-item-details.component.css']
})
export class MatchListItemDetailsComponent{

  @Input() detals: Array<Detail>;
  
  constructor(public activeModal: NgbActiveModal) {}
}
