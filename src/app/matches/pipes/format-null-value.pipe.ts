import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNullValue'
})
export class FormatNullValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) {
      return args;
    }
    return value;
  }

}
