import {Timestamp} from "rxjs";
export class Period {
  constructor(public id: number, public name: string, public from: Timestamp<string>, public to: Timestamp<string>) {}
}
