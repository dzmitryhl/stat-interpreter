import {EventEmitter, Injectable} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {Row} from "./model/row";
import {Match} from "./model/match";

@Injectable()
export class DataImportService {

  dataLoaded = new EventEmitter<Array<Match>>();
  locationFilterValue: string = '';
  championshipFilterValue: string = '';
  startDateFilterValue: Date = null;
  endDateFilterValue: Date = null;
  showReconstructedOnly: boolean = false;

  pendingRequest: boolean;

  constructor(private http: Http) {}

  loadData(params: any) {
    const body = JSON.stringify(params);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    this.pendingRequest = true;

    return this.http.post('http://localhost:8080/results-check', body, {
      headers: headers
    })
      .map((response: Response) => response.json())
      .subscribe(
        (data: Array<Match>) => {
          this.dataLoaded.emit(data);
          this.pendingRequest = false;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  saveRow(data) {
    const body = JSON.stringify(data);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:8080/saveRow', body, {
      headers: headers
    })
      .subscribe(
        (response: Response) => {
          if (response.status === 200) {

          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  runDataImport() {
    return this.http.get('http://localhost:8080/import-data', {})
      .subscribe(
        (response: Response) => {
          if (response.status === 200) {

          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  startDataImport() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:8080/startDataImport', {}, {
      headers: headers,
      withCredentials: true
    })
      .subscribe(
        (response: Response) => {
          if (response.status === 200) {

          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
