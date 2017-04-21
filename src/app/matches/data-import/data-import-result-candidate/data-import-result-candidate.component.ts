import {Component, Input, OnInit} from '@angular/core';
import {ResultCandidate} from "../model/resultCandidate";

@Component({
  selector: 'app-data-import-result-candidate',
  templateUrl: './data-import-result-candidate.component.html',
  styleUrls: ['./data-import-result-candidate.component.css']
})
export class DataImportResultCandidateComponent implements OnInit {

  @Input() resultCandidate: ResultCandidate;

  constructor() { }

  ngOnInit() {
  }

}
