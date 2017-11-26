import { State } from './../auth/store/auth.reducers';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { AppState } from './../store/app.reducers';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as fromAuth from "../auth/store/auth.reducers";
import { Logout } from "../auth/store/auth.actions"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  appState: Observable<fromAuth.State>;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.appState = this.store.select("auth");
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
