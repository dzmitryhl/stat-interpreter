import { Component, OnInit } from '@angular/core';
import {DataImportService} from "./data-import.service";
import {Row} from "./model/row";
import {Match} from "./model/match";
import {CompetitionFilter} from "./model/filter"

@Component({
  selector: 'app-data-import',
  templateUrl: './data-import.component.html',
  styleUrls: ['./data-import.component.css']
})
export class DataImportComponent implements OnInit {
  matches: Array<Match>;
  locations: Array<string>;
  championships: Array<string>;
  competitionFilters: Array<CompetitionFilter>;

  get locationFilterValue(): string {
    return this.dataImportService.locationFilterValue;
  }

  get championshipFilterValue(): string {
    return this.dataImportService.championshipFilterValue;
  }

  get startDateFilterValue(): Date {
    return this.dataImportService.startDateFilterValue;
  }

  get endDateFilterValue(): Date {
    return this.dataImportService.endDateFilterValue;
  }

  get isReconstructedOnly(): boolean {
    return this.dataImportService.showReconstructedOnly;
  }

  constructor(private dataImportService: DataImportService) { }

  ngOnInit(): void {
    this.dataImportService.dataLoaded.subscribe(
      (matches: Array<Match>) => {
        if (matches) {
          this.competitionFilters = this.getFilterValues(matches);
          this.competitionFilters.push(new CompetitionFilter("", ""));

          this.locations = this.competitionFilters.filter(function (el, index, self) {
            return self.findIndex(function (filter: CompetitionFilter) {
                return filter.location === el.location;
              }) === index;
          }).map(function (filter: CompetitionFilter) {
            return filter.location;
          });

          this.championships = this.competitionFilters.filter(function (el, index, self) {
            return self.findIndex(function (filter: CompetitionFilter) {
                return filter.championship === el.championship;
              }) === index;
          }).map(function (filter: CompetitionFilter) {
            return filter.championship;
          });
        }
        this.matches = matches;
      }
    );
  }

  getFilterValues(matches: Array<Match>) : Array<CompetitionFilter> {
    return matches.filter(function(el, index, self){
      return self.findIndex(function (match: Match) {
          return match.location === el.location && match.championship === el.championship;
        }) === index;
    }).map(function (match: Match) {
      return new CompetitionFilter(match.location, match.championship);
    });
  }
}
