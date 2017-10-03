import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumTransform'
})
export class EnumTransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keys = [];
    for (let enumMember in value) {
      if (!isNaN(parseInt(enumMember, 10))) {
        keys.push({key: enumMember, value: value[enumMember]});
      } 
    }
    return keys;
  }

}
