import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatchesRoutingModule } from "./matches-routing.module";
import { MatchesComponent } from './matches.component';
import { MatchService } from "./match.service";
import { MatchListComponent } from "./match-list.component";
import { MatchListItemComponent } from "./match-list-item/match-list-item.component";
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { FilterForecastStatusPipe } from "./pipes/filter-forecast-status.pipe";
import { TableFiltersComponent } from './table-filters/table-filters.component';
import { DataImportComponent } from './data-import/data-import.component';
import { DataImportService } from "./data-import/data-import.service";
import { DataImportRowContainerComponent } from './data-import/data-import-row-container/data-import-row-container.component';
import { DataImportRowComponent } from './data-import/data-import-row/data-import-row.component';
import { DataImportResultCandidateComponent } from './data-import/data-import-result-candidate/data-import-result-candidate.component';
import { DataImportFilterPanelComponent } from './data-import/data-import-filter-panel/data-import-filter-panel.component';
import { FilterMatchLocationPipe } from './pipes/filter-match-location.pipe';
import { FilterMatchChampionshipPipe } from './pipes/filter-match-championship.pipe';
import { FilterCompetitionFilterOptionsPipe } from './pipes/filter-competition-filter-options.pipe';
import { FilterCompetitionDuplicatesPipe } from './pipes/filter-competition-duplicates.pipe';
import { SortCompetitionsPipe } from './pipes/sort-competitions.pipe';
import { FilterMatchDateRangeStartPipe } from './pipes/filter-match-date-range-start.pipe';
import { FilterMatchDateRangeEndPipe } from './pipes/filter-match-date-range-end.pipe';
import { FilterMatchCompletenessPipe } from './pipes/filter-match-completeness.pipe';
import { DataImportActionPanelComponent } from './data-import/data-import-action-panel/data-import-action-panel.component';
import { FormatNullValuePipe } from './pipes/format-null-value.pipe';
import { EnumTransformPipe } from './pipes/enum-transform.pipe';

import { APP_CONFIG, CONFIG } from '../app.config';
import { StrategyTypeNamePipe } from './pipes/strategy-type-name.pipe';
import { MatchListItemDetailsComponent } from './match-list-item/match-list-item-details/match-list-item-details.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatchesRoutingModule,
    NgbModule
  ],
  declarations: [
    MatchesComponent,
    MatchListComponent,
    MatchListItemComponent,
    MatchesComponent,
    FilterPanelComponent,
    FilterForecastStatusPipe,
    TableFiltersComponent,
    DataImportComponent,
    DataImportRowContainerComponent,
    DataImportRowComponent,
    DataImportResultCandidateComponent,
    DataImportFilterPanelComponent,
    FilterMatchLocationPipe,
    FilterMatchLocationPipe,
    FilterMatchChampionshipPipe,
    FilterCompetitionFilterOptionsPipe,
    FilterCompetitionDuplicatesPipe,
    SortCompetitionsPipe,
    FilterMatchDateRangeStartPipe,
    FilterMatchDateRangeEndPipe,
    FilterMatchCompletenessPipe,
    DataImportActionPanelComponent,
    FormatNullValuePipe,
    EnumTransformPipe,
    StrategyTypeNamePipe,
    MatchListItemDetailsComponent
  ],
  entryComponents: [
    MatchListItemDetailsComponent
  ],
  exports: [MatchesComponent],
  providers: [
    MatchService,
    DataImportService,
    {
      provide: APP_CONFIG,
      useValue: CONFIG
    }]
})
export class MatchesModule { }
