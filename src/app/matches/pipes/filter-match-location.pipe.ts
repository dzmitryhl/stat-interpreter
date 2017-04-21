import { Pipe, PipeTransform } from '@angular/core';
import {Match} from "../data-import/model/match";

@Pipe({
  name: 'filterMatchLocation'
})
export class FilterMatchLocationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.length !== 0 && args) {
      return value.filter(function(match: Match) {
        return match.location === args;
      });
    }
    return value;
  }
}
