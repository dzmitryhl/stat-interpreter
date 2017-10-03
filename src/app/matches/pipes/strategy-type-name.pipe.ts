import { Pipe, PipeTransform } from '@angular/core';
import { StrategyType } from "../../model/strategyType";

@Pipe({
  name: 'strategyTypeName'
})
export class StrategyTypeNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value || [];
    let names = [];
    names[StrategyType.FAVORITE_SCORED] = "Favorite Scores";
    names[StrategyType.OUTSIDER_SCORED] = "Outsider Scores";
    names[StrategyType.NO_ONE_SCORED] = "X";

    return value.map(function(strategyTypeItem) {
      strategyTypeItem.name = names[strategyTypeItem.key];
      return strategyTypeItem;
    });
  }

}
