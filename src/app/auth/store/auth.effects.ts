import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as AuthActions from "./auth.actions";
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP);

    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .map((action: AuthActions.TrySignin) => {
            return action.payload;
        })
        .switchMap((authData: {username: string, password: string}) => {
            const body = JSON.stringify({
                username: authData.username,
                password: authData.password
            });

            const headers = new HttpHeaders({
                'Content-Type': 'application/json'
            });

            return this.httpClient.post<{token: string}>('http://localhost:3000/authenticate', body, {
                headers: headers
            })
        })
        .switchMap(data => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGNIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: data.token
                },
                {
                    type: AuthActions.DECODE_TOKEN_PAYLOAD,
                    payload: data.token
                }
            ];
    });

  constructor(
    private actions$: Actions,
    private router: Router,
    private httpClient: HttpClient) {}
}