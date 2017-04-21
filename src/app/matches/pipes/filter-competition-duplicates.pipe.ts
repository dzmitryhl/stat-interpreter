import { Pipe, PipeTransform } from '@angular/core';
import {CompetitionFilter} from "../data-import/model/filter";

@Pipe({
  name: 'filterCompetitionDuplicates'
})
export class FilterCompetitionDuplicatesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let property = args;
    if (value && value.length!== 0) {
      return value.filter(
        (competitionFilter: CompetitionFilter, index : number, self: Array<CompetitionFilter>) => {
          return self.findIndex(function (filter: CompetitionFilter) {
              return filter[property] === competitionFilter[property];
            }) === index;
        }
      )
    }
    return value;
  }

}
