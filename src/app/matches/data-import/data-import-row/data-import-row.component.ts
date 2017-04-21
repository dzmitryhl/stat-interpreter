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

  buttonClicked: boolean = false;

  constructor(private dataImportService: DataImportService) { }

  ngOnInit() {
  }

  handleFormSubmit() {
    this.buttonClicked = true;
    this.dataImportService.saveRow(this.row);
  }

  handleGoogleSearch() {
    var datePipe = new DatePipe('en-US');
    //var query = '"' + this.row.name.split(" ").join("%20") + '"%20' + datePipe.transform(this.row.rowTimeStamp, 'dd/MM/yyyy');
    var query = "test";
    var win = window.open('https://www.google.ru/search?q=' + query, '_blank');
    win.focus();
  }
}
