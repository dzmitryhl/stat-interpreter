import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as MatchesActions from '../store/matches.actions';
import * as fromMatches from '../store/matches.reducers';

import { Forecast } from "../../model/forecast";

@Injectable()
export class MatchesEffects {
    @Effect()
    matchesFetch = this.actions$
        .ofType(MatchesActions.APPLY_STRATEGY)
        .switchMap((action: MatchesActions.ApplyStrategy) => {
            const body = JSON.stringify(action.payload);
            const headers = new HttpHeaders({
                'Content-Type': 'application/json'
            });
            return this.httpClient.post<Forecast[]>('http://localhost:3000/loadData', body, {
                headers: headers,
            })
          })
          .map(
            (forecasts) => {
              return {
                type: MatchesActions.SET_MATCHES,
                payload: forecasts
              };
            }
          );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient) {}
}