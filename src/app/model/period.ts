import {Timestamp} from "rxjs";
export class Period {
  constructor(public startDate: Timestamp<string>, public endDate: Timestamp<string>) {}
}
