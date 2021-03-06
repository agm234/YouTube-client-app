import { Pipe, PipeTransform } from '@angular/core';

import { ISearchItem } from '../models/search-item-model';

@Pipe({
  name: 'SortByViews',
})
export class SortByViews implements PipeTransform {
  transform(value: ISearchItem[] | null, isDesc:boolean, arg?: string):ISearchItem[] | null {
    if (arg === 'views') {
      return this.sort(value, isDesc);
    }
    return value;
  }

  sort(value: ISearchItem[] | null, isDesc:boolean) {
    const sortedValue = (value as ISearchItem[]).sort((val1:ISearchItem, val2:ISearchItem) => {
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
