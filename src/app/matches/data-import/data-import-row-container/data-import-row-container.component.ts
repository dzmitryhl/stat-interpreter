import { DatePipe } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {Row} from "../model/row";
import {Match} from "../model/match";

@Component({
  selector: 'app-data-import-row-container',
  templateUrl: './data-import-row-container.component.html',
  styleUrls: ['./data-import-row-container.component.css']
})
export class DataImportRowContainerComponent implements OnInit {
  get searchTerm(): string {
    var datePipe = new DatePipe('en-US');
    return this.match.homeTeam + '%20' + this.match.awayTeam + '%20' + datePipe.transform(this.match.plannedKickoffDate, 'dd/MM/yyyy');
  }

  @Input() match : Match;

  constructor() { }

  ngOnInit() {
  }

}
