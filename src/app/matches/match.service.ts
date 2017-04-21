import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";

import 'rxjs/Rx';
import {Match} from "../model/match";
import {Period} from "../model/period";
import {Forecast} from "../model/forecast";

@Injectable()
export class MatchService {

  matchesChanged = new EventEmitter<Match[]>();
  periodsChanged = new EventEmitter<Period[]>();
  forecastsChanged = new EventEmitter<Forecast[]>();

  matches: Match[];
  periods: Period[];
  forecasts: Forecast[];

  status: string = '';

  constructor(private http: Http) {}

  fetchPeriodsData() {
    return this.http.get('http://localhost:8080/periods', {
      withCredentials: true
    })
      .map((response: Response) => response.json())
      .subscribe(
        (data: Period[]) => {
          this.periods = data;
          this.periodsChanged.emit(this.periods);
        }
      )
  }

  loadData(data) {
    const body = JSON.stringify({
      periodId: data.period
    });
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:8080/loadData', body, {
      headers: headers,
      withCredentials: true
    })
      .map((response: Response) => response.json())
      .subscribe(
        (data: any) => {
          this.forecastsChanged.emit(data.forecasts);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
