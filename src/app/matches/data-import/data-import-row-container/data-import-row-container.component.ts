import {Component, Input, OnInit} from '@angular/core';
import {Row} from "../model/row";
import {Match} from "../model/match";

@Component({
  selector: 'app-data-import-row-container',
  templateUrl: './data-import-row-container.component.html',
  styleUrls: ['./data-import-row-container.component.css']
})
export class DataImportRowContainerComponent implements OnInit {

  @Input() match : Match;

  constructor() { }

  ngOnInit() {
  }

}
