import { LoadChildrenCallback } from '@angular/router/router';
import { Component, OnInit, Injector } from '@angular/core';
import { Period } from "../../model/period";
import { StrategyType } from "../../model/strategyType";
import { MatchService } from "../match.service";
import { APP_CONFIG } from "../../app.config"

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  periods: Period[];
  strategyTypes: any;
  filterValues: any = {};

  limits: Array<any> = [{
    value: 0,
    label: "N Random"
  }, {
    value: 100,
    label: "100 Random"
  }, {
    value: 500,
    label: "500 Random"
  }, {
    value: 1000,
    label: "1000 Random"
  }, {
    value: 5000,
    label: "5000 Random"
  }, {
    value: 10000,
    label: "10000 Random"
  }];

  constructor(private matchService: MatchService, private injector: Injector) {}

  ngOnInit() {
    let config = this.injector.get(APP_CONFIG);
    let defaultFilterValues = config.filterValues;

    this.strategyTypes = StrategyType;

    this.filterValues = {
      favoriteCoefficientRangeMin: defaultFilterValues.favoriteCoefficientRangeMin,
      favoriteCoefficientRangeMax: defaultFilterValues.favoriteCoefficientRangeMax,
      favoriteCoefficientMin: defaultFilterValues.favoriteCoefficientMin,
      favoriteCoefficientMax: defaultFilterValues.favoriteCoefficientMax,
      outsiderCoefficientRangeMin: defaultFilterValues.outsiderCoefficientRangeMin,
      outsiderCoefficientRangeMax: defaultFilterValues.outsiderCoefficientRangeMax,
      outsiderCoefficientMin: defaultFilterValues.outsiderCoefficientMin,
      outsiderCoefficientMax: defaultFilterValues.outsiderCoefficientMax,
      favoriteScoreRangeMin: defaultFilterValues.favoriteScoreRangeMin,
      favoriteScoreRangeMax: defaultFilterValues.favoriteScoreRangeMax,
      favoriteScoreMin: defaultFilterValues.favoriteScoreMin,
      favoriteScoreMax: defaultFilterValues.favoriteScoreMax,
      outsiderScoreRangeMin: defaultFilterValues.outsiderScoreRangeMin,
      outsiderScoreRangeMax: defaultFilterValues.outsiderScoreRangeMax,
      outsiderScoreMin: defaultFilterValues.outsiderScoreMin,
      outsiderScoreMax: defaultFilterValues.outsiderScoreMax,
      timeRangeMin: defaultFilterValues.timeRangeMin,
      timeRangeMax: defaultFilterValues.timeRangeMax,
      timeMin:defaultFilterValues.timeMin,
      timeMax: defaultFilterValues.timeMax,
      integerStep: defaultFilterValues.integerStep,
      fractionalStep: defaultFilterValues.fractionalStep,
      loadAll: true,
      loadNRandom: 0,
      interval: {
        startDate: null,
        endDate: null
      },
      strategyType: StrategyType.FAVORITE_SCORED,
      showHistory: true,
      showDetails: true
    }

    this.matchService.fetchPeriodsData();
    this.matchService.periodsChanged.subscribe(
      (periods: Period[]) => this.periods = periods
    );
  }

  handleFormSubmit(formData) {
    this.matchService.loadData(formData);
  }

  getAllButtonChecked(value: boolean) {
    this.filterValues.loadAll = value;
    this.filterValues.loadNRandom = 0;
    this.filterValues.interval.startDate = null;
    this.filterValues.interval.endDate = null;
  }

  limitSelected(value: number) {
    this.filterValues.loadAll = false;
    this.filterValues.loadNRandom = value;
    this.filterValues.interval.startDate = null;
    this.filterValues.interval.endDate = null;
  }

  startDateSelected(value: Date) {
    this.filterValues.loadAll = false;
    this.filterValues.loadNRandom = 0;
    this.filterValues.interval.startDate = value;
  }

  endDateSelected(value: Date) {
    this.filterValues.loadAll = false;
    this.filterValues.loadNRandom = 0;
    this.filterValues.interval.endDate = value;
  }

  loadData(): void {
    this.matchService.applyStrategy(this.filterValues);
  }
}
