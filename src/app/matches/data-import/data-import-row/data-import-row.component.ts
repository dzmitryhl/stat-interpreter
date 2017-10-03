import {Component, Input, OnInit} from '@angular/core';
import {Row} from "../model/row";
import {DataImportService} from "../data-import.service";
import {DatePipe} from "@angular/common";
import {Detail} from "../model/detail";

@Component({
  selector: 'app-data-import-row',
  templateUrl: './data-import-row.component.html',
  styleUrls: ['./data-import-row.component.css']
})
export class DataImportRowComponent implements OnInit {

  @Input() row: Detail;
  @Input() searchTerm: string;

  buttonClicked: boolean = false;

  constructor(private dataImportService: DataImportService) { }

  ngOnInit() {
  }

  handleFormSubmit() {
    this.buttonClicked = true;
    this.dataImportService.updateMatchResult({
      matchId: this.row.id,
      homeTeamScore: this.row.score1,
      awayTeamScore: this.row.score2
    });
    
    //this.dataImportService.saveRow(this.row);
  }

  handleGoogleSearch() {
    let win = window.open('https://www.google.ru/search?q=' + this.searchTerm, '_blank');
    win.focus();
  }
}
