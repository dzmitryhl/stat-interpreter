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

  handleFavoriteMinValueChanged(value: number) {
    this.favoriteCoefficientMin = value;
  }

  handleFavoriteMaxValueChanged(value: number) {
    this.favoriteCoefficientMax = value;
  }

  handleOutsiderMinValueChanged(value: number) {
    this.outsiderCoefficientMin = value;
  }

  handleOutsiderMaxValueChanged(value: number) {
    this.outsiderCoefficientMax = value;
  }

  handleTimeMinValueChanged(value: number) {
    this.timeMin = value;
  }

  handleTimeMaxValueChanged(value: number) {
    this.timeMax = value;
  }

  handleFavoriteMinScoreChanged(value: number) {
    this.favoriteScoreMin = value;
  }

  handleFavoriteMaxScorehanged(value: number) {
    this.favoriteScoreMax = value;
  }

  handleOutsiderMinScoreChanged(value: number) {
    this.outsiderScoreMin = value;
  }

  handleOutsiderMaxScorehanged(value: number) {
    this.outsiderScoreMax = value;
  }
}
