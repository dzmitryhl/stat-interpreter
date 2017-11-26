import { LoadChildrenCallback } from '@angular/router/router';
import { Component, OnInit, Injector } from '@angular/core';
import { Period } from "../../model/period";
import { StrategyType } from "../../model/strategyType";
import { MatchService } from "../match.service";
import { APP_CONFIG } from "../../app.config"

import * as fromMatches from '../store/matches.reducers';
import { Store } from '@ngrx/store';
import { ApplyStrategy } from './../store/matches.actions';


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

  test1;
  test2;

  constructor(
    private matchService: MatchService,
    private injector: Injector,
    private store: Store<fromMatches.State>) {}

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

  startDateSelected(value: any): void {
    console.log(value);
    this.filterValues.loadAll = false;
    this.filterValues.loadNRandom = 0;
    this.filterValues.interval.startDate = value;

    console.log();
  }

  endDateSelected(value: any): void {
    this.filterValues.loadAll = false;
    this.filterValues.loadNRandom = 0;
    this.filterValues.interval.endDate = value;
  }

  loadData(): void {
    let intervalStart = this.filterValues.interval.startDate;
    let intervalEnd = this.filterValues.interval.endDate;

    let strategyArgs = Object.assign({}, this.filterValues, {
      interval: {
        startDate: intervalStart ? new Date(intervalStart.year, intervalStart.month - 1, intervalStart.day) : null,
        endDate: intervalEnd ? new Date(intervalEnd.year, intervalEnd.month - 1, intervalEnd.day) : null,
      }
    });

    this.store.dispatch(new ApplyStrategy(strategyArgs));

  }
}
