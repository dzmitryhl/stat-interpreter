import { Pipe, PipeTransform } from '@angular/core';
import {CompetitionFilter} from "../data-import/model/filter";
@Pipe({
  name: 'sortCompetitions'
})
export class SortCompetitionsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let property = args;
    if (value && value.length !==0 && property) {
      return value.sort(
        (v1: CompetitionFilter, v2: CompetitionFilter) => {
          let value1 = v1[property].toUpperCase();
          let value2 = v2[property].toUpperCase();
          if (value1 < value2) {
            return -1;
          }
          if (value1 > value2) {
            return 1;
          }
          return 0;
        }
      );
    }
    return value;
  }

}
