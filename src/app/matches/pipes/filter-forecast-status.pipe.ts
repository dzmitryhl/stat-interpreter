import { Pipe, PipeTransform } from '@angular/core';
import {Forecast} from "../../model/forecast";

@Pipe({
  name: 'filterForecastStatus'
})
export class FilterForecastStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.length !== 0 && (args === 'success' || args === 'failure' || args === 'uncompleted')) {
      return value.filter(function(forecast: Forecast) {
        if (args === 'success') {
          return forecast.isWinning;
        } else if (args === 'failure') {
          return !forecast.isWinning && forecast.isCompleted;
        } else {
          return !forecast.isWinning && !forecast.isCompleted;
        }
      });
    }
    return value;
  }

}
