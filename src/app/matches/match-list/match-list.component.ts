import { ChangeDetectionStrategy } from '@angular/core';
import { TotalResult } from './../../model/totalResult';
import { Component, OnInit } from '@angular/core';
import {Match} from "../../model/match";
import {MatchService} from "../match.service";
import {Period} from "../../model/period";
import {Forecast} from "../../model/forecast";
import * as fromMatches from '../store/matches.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-match-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  filterPanelOpened: boolean = false;
  appState: Observable<fromMatches.State>;

  get status(): string {
    return this.matchService.status;
  }

  constructor(
    private matchService: MatchService,
    private store: Store<fromMatches.FeatureState>) { }

  ngOnInit() {
    this.appState = this.store.select("matches");
  }

  openCloseFilterPanel() {
    this.filterPanelOpened = !this.filterPanelOpened;
  }
}
