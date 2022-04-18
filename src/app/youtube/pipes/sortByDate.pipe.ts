import { Pipe, PipeTransform } from '@angular/core';

import { ISearchItem } from '../models/search-item-model';

@Pipe({
  name: 'SortByDate',
})
export class SortByDate implements PipeTransform {
  transform(value: ISearchItem[] | null, isDesc:boolean, arg?: string):ISearchItem[] | null {
    if (arg === 'date') {
      return this.sort(value, isDesc);
    }
    return value;
  }

  sort(value: ISearchItem[] | null, isDesc:boolean) {
    const sortedValue = (value as ISearchItem[]).sort((val1:ISearchItem, val2:ISearchItem) => {
      const dateOne = new Date(val1.snippet.publishedAt).getTime();
      const dateTwo = new Date(val2.snippet.publishedAt).getTime();
      return dateOne - dateTwo;
    });
    if (isDesc) {
      return sortedValue;
    }
    return sortedValue.reverse();
  }
}
