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

  favoriteCoefficientRangeMin: number = 0;
  favoriteCOefficientRangeMax: number = 5;
  
  favoriteCoefficientMin: number = 1;
  favoriteCoefficientMax: number = 2;

  coefficientStep: number = 0.05;

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

  handleMinValueChanged(value: number) {
    this.favoriteCoefficientMin = value;
  }

  handleMaxValueChanged(value: number) {
    this.favoriteCoefficientMax = value;
  }
}
