import { AppState } from './../store/app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as AppActions from "../store/app.actions";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  appState: Observable<{switcher: boolean}>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.appState = this.store.select("app");
  }

  switcherStateChanged(state: boolean) {
    this.store.dispatch(new AppActions.ChangeSwitcherState(state));
  }
}
