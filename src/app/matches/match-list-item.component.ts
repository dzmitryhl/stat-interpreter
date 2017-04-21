import {Component, Input, OnInit} from '@angular/core';
import {Match} from "../model/match";

@Component({
  selector: 'app-match-list-item',
  templateUrl: './match-list-item.component.html',
  styleUrls: ['./match-list-item.component.css']
})
export class MatchListItemComponent implements OnInit {

  @Input() match : Match;

  constructor() { }

  ngOnInit() {
  }

}
