import { Pipe, PipeTransform } from '@angular/core';

import { ISearchItem } from '../models/search-item-model';

@Pipe({
  name: 'SortByViews',
})
export class SortByViews implements PipeTransform {
  transform(value: ISearchItem[], isDesc:boolean, arg?: string):ISearchItem[] {
    if (arg === 'views') {
      this.sort(value, isDesc);
    }
    return value;
  }

  sort(value: ISearchItem[], isDesc:boolean) {
    const sortedValue = value.sort((val1:ISearchItem, val2:ISearchItem) => {
      const valOne = +val1.statistics.viewCount;
      const valTwo = +val2.statistics.viewCount;
      return valOne - valTwo;
    });
    if (isDesc) {
      return sortedValue;
    }
    return sortedValue.reverse();
  }
}
