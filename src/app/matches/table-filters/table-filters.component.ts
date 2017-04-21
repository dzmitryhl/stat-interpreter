import { Component, OnInit } from '@angular/core';
import {MatchService} from "../match.service";

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.css']
})
export class TableFiltersComponent {

  statuses: any[] = [{
    id: 1,
    name: 'success'
  }, {
    id: 2,
    name: 'failure'
  }, {
    id: 3,
    name: 'uncompleted'
  }];

  constructor(private matchService: MatchService) { }

  onChange(oData: any) {
    this.matchService.status = oData.split(':')[1].trim();
  }
}
