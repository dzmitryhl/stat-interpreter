import { TotalResult } from './../model/totalResult';
import { Component, OnInit } from '@angular/core';
import {Match} from "../model/match";
import {MatchService} from "./match.service";
import {Period} from "../model/period";
import {Forecast} from "../model/forecast";

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  forecasts: Forecast[];
  filterPanelOpened: boolean = false;

  data: TotalResult;

  get status(): string {
    return this.matchService.status;
  }

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.forecastsChanged.subscribe(
      (forecasts: Forecast[]) => this.forecasts = forecasts
    );
    this.matchService.strategyRequstCompleted.subscribe(
      (data: TotalResult) => this.data = data
    );
  }

  openCloseFilterPanel() {
    this.filterPanelOpened = !this.filterPanelOpened;
  }
}
