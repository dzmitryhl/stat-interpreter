import { Pipe, PipeTransform } from '@angular/core';
import {CompetitionFilter} from "../data-import/model/filter";

@Pipe({
  name: 'filterCompetitionFilterOptions'
})
export class FilterCompetitionFilterOptionsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let property = args[0];
    let filterValue = args[1];

    if (value && value.length && filterValue) {
      return value.filter(
        (competitionFilter: CompetitionFilter) => {
          return competitionFilter[property] === filterValue || (competitionFilter.location === '' && competitionFilter.championship === '');
        }
      )
    }
    return value;
  }

}
