import { Component, Input, OnChanges } from '@angular/core';
import { DataImportService } from "../data-import.service";
import { CompetitionFilter } from "../model/filter";

@Component({
  selector: 'app-data-import-filter-panel',
  templateUrl: './data-import-filter-panel.component.html',
  styleUrls: ['./data-import-filter-panel.component.css']
})
export class DataImportFilterPanelComponent {
  @Input() competitionFilters: Array<CompetitionFilter>;
  @Input() locations: Array<string>;
  @Input() championships: Array<string>;

  get locationFilterValue(): string {
    return this.dataImportService.locationFilterValue;
  }

  get championshipFilterValue(): string {
    return this.dataImportService.championshipFilterValue;
  }

  constructor(private dataImportService: DataImportService) { }

  onLocationChange(oData: any) {
    this.dataImportService.locationFilterValue = oData.split(':')[1].trim();
  }

  onChampionshipChange(oData: any) {
    this.dataImportService.championshipFilterValue = oData.split(':')[1].trim();
  }

  startDateSelected(eventDate: Date): void {
    this.dataImportService.startDateFilterValue = eventDate;
  }

  endDateSelected(eventDate: Date): void {
    this.dataImportService.endDateFilterValue = eventDate;
  }

  handleCheckboxSelected() {
      this.dataImportService.showReconstructedOnly = !this.dataImportService.showReconstructedOnly;
  }
}
