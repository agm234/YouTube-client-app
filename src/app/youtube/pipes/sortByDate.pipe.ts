import { Pipe, PipeTransform } from '@angular/core';

import { ISearchItem } from '../models/search-item-model';
import { SortdataService } from '../services/sortdata.service';

@Pipe({
  name: 'SortByDate',
})
export class SortByDate implements PipeTransform {
  constructor(private sortdataService:SortdataService) {
  }

  transform(value: ISearchItem[] | null, isDesc:boolean, arg?: string):ISearchItem[] | null {
    if (arg === 'date') {
      this.sort(value, isDesc);
    }
    return value;
  }

  sort(value: ISearchItem[] | null, isDesc:boolean) {
    const sortedValue = (value as ISearchItem[]).sort((val1:ISearchItem, val2:ISearchItem) => {
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