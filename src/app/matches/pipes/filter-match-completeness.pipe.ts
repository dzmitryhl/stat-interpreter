import { Pipe, PipeTransform } from '@angular/core';
import {Match} from "../data-import/model/match";
@Pipe({
  name: 'filterMatchCompleteness'
})
export class FilterMatchCompletenessPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let reconstructedOnly = args;
    if (value && value.length !== 0 && reconstructedOnly) {
      return value.filter(function(match: Match) {
        return match.details && match.details[0] && match.details[0].reconstructed === reconstructedOnly;
      });
    }
    return value;
  }
}
