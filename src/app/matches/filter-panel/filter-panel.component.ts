import { LoadChildrenCallback } from '@angular/router/router';
import { Component, OnInit } from '@angular/core';
import {Period} from "../../model/period";
import {MatchService} from "../match.service";

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  periods: Period[];

  startDate: Date;
  endDate: Date;
  limit: number = 0;
  loadAll: boolean = true;

  favoriteCoefficientRangeMin: any = 1;
  favoriteCoefficientRangeMax: any = 5;
  favoriteCoefficientMin: number = 2;
  favoriteCoefficientMax: number = 3.5;

  outsiderCoefficientRangeMin: number = 1;
  outsiderCoefficientRangeMax: number = 20;
  outsiderCoefficientMin: number = 3;
  outsiderCoefficientMax: number = 6;

  favoriteScoreRangeMin: number = 0;
  favoriteScoreRangeMax: number = 5;
  favoriteScoreMin: number = 0;
  favoriteScoreMax: number = 2;

  outsiderScoreRangeMin: number = 0;
  outsiderScoreRangeMax: number = 5;
  outsiderScoreMin: number = 0;
  outsiderScoreMax: number = 2;

  timeRangeMin: number = 1;
  timeRangeMax: number = 90;
  timeMin: number = 41;
  timeMax: number = 49;

  integerStep: number = 1;
  fractionalStep: number = 0.05;

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
  }]

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.fetchPeriodsData();
    this.matchService.periodsChanged.subscribe(
      (periods: Period[]) => this.periods = periods
    );
  }

  handleFormSubmit(formData) {
    this.matchService.loadData(formData);
  }

  getAllButtonChecked(value: boolean) {
    this.loadAll = value;
    this.limit = 0;
    this.startDate = null;
    this.endDate = null;
  }

  limitSelected(value: number) {
    this.limit = value;
    this.startDate = null;
    this.endDate = null;
    this.loadAll = false;
  }

  startDateSelected(value: Date) {
    this.startDate = value;
    this.limit = 0;
    this.loadAll = false;
  }

  endDateSelected(value: Date) {
    this.endDate = value;
    this.limit = 0;
    this.loadAll = false;
  }
}
