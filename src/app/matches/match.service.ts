import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

import 'rxjs/Rx';
import { Match } from "../model/match";
import { Period } from "../model/period";
import { Forecast } from "../model/forecast";
import { TotalResult } from '../model/totalResult';

@Injectable()
export class MatchService {

  matchesChanged = new EventEmitter<Match[]>();
  periodsChanged = new EventEmitter<Period[]>();
  forecastsChanged = new EventEmitter<Forecast[]>();

  strategyRequstCompleted = new EventEmitter<TotalResult>();

  matches: Match[];
  periods: Period[];
  forecasts: Forecast[];

  status: string = '';

  constructor(
    private httpClient: HttpClient) {}

  fetchPeriodsData() {
    return this.httpClient.get<Period[]>('http://localhost:8080/periods', {
      withCredentials: true
    })
      .subscribe(
        (data: Period[]) => {
          this.periods = data;
          this.periodsChanged.emit(this.periods);
        }
      )
  }

  // loadData(data) {
  //   const body = JSON.stringify({
  //     periodId: data.period
  //   });

  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.httpClient.post('http://localhost:8080/loadData', body, {
  //     headers: headers,
  //     withCredentials: true
  //   })
  //     .subscribe(
  //       (data: any) => {
  //         this.forecastsChanged.emit(data.forecasts);
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     );
  // }

  // applyStrategy(strategyArgs) {
  //   const body = JSON.stringify(strategyArgs);
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.httpClient.post('http://localhost:8080/loadData', body, {
  //     headers: headers,
  //     withCredentials: true
  //   })
  //     .subscribe(
  //       (data: any) => {
  //         console.log("loaded");
  //         this.forecastsChanged.emit(data.partialResults[0].forecasts);
  //         this.strategyRequstCompleted.emit(data);
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     );
  // }
}
