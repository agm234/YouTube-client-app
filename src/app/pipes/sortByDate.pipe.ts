import { Pipe, PipeTransform } from '@angular/core';

import { ISearchItem } from '../models/search-item-model';

@Pipe({
  name: 'SortByDate',
})
export class SortByDate implements PipeTransform {
  transform(value: ISearchItem[], isDesc:boolean, arg?: string):ISearchItem[] {
    if (arg === 'date') {
      this.sort(value, isDesc);
    }
    return value;
  }

  sort(value: ISearchItem[], isDesc:boolean) {
    const sortedValue = value.sort((val1:ISearchItem, val2:ISearchItem) => {
      const dateOne = +new Date(val1.snippet.publishedAt);
      const dateTwo = +new Date(val2.snippet.publishedAt);
      return dateOne - dateTwo;
    });
    if (isDesc) {
      return sortedValue;
    }
    return sortedValue.reverse();
  }
}
