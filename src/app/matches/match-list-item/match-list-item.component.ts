import { MatchListItemDetailsComponent } from './match-list-item-details/match-list-item-details.component';
import { Forecast } from './../../model/forecast';
import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-match-list-item]',
  templateUrl: './match-list-item.component.html',
  styleUrls: ['./match-list-item.component.css']
})
export class MatchListItemComponent {

  @Input() forecast : Forecast;

  closeResult: string;
  
    constructor(private modalService: NgbModal) {}
  
    open() {
      const modalRef = this.modalService.open(MatchListItemDetailsComponent);
      modalRef.componentInstance.details = this.forecast.match.details;
    }

}
