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
  favoriteCOefficientRangeMax: any = 5;

  outsiderCoefficientRangeMin: number = 1;
  outsiderCOefficientRangeMax: number = 20;

  timeRangeMin: number = 1;
  timeRangeMax: number = 90;
  
  favoriteCoefficientMin: number = 2;
  favoriteCoefficientMax: number = 3.5;

  outsiderCoefficientMin: number = 3;
  outsiderCoefficientMax: number = 6;

  timeMin: number = 41;
  timeMax: number = 49;

  coefficientStep: number = 0.05;
  timeStep: number = 1;

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

  // setMinSafeInteger(): number {
  //   return Number.MIN_SAFE_INTEGER;
  // }

  // setMaxSafeInteger(): number {
  //   return Number.MAX_SAFE_INTEGER;
  // }
}
