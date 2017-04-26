import { DataImportService } from './../data-import.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-import-action-panel',
  templateUrl: './data-import-action-panel.component.html',
  styleUrls: ['./data-import-action-panel.component.css']
})
export class DataImportActionPanelComponent implements OnInit {

  startDate: Date;
  endDate: Date;
  uncompletedOnly: boolean = false;

  get startDateInitial(): Date {
    let d = new Date();
    d.setHours(0,0,0,0);
    d.setDate(d.getDate() - 14);
    return d;
  }

  get endDateInitial(): Date {
    let d = new Date();
    d.setHours(23, 59, 59, 999);
    return d;
  }

  get pendingRequest(): boolean {
    return this.dataImportService.pendingRequest;
  }

  constructor(private dataImportService: DataImportService) { }

  ngOnInit() {
  }

  startDateSelected(eventDate: Date): void {
    this.startDate = eventDate;
  }

  endDateSelected(eventDate: Date): void {
    this.endDate = eventDate;
  }

  fetchData(): void {
    this.dataImportService.loadData({
      uncompletedOnly: this.uncompletedOnly,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

  importData(): void {
    this.dataImportService.startDataImport();
  }
}
