import { Pipe, PipeTransform } from '@angular/core';

import { ISearchItem } from '../models/search-item-model';

@Pipe({
  name: 'SearchPipe',
})

export class SearchPipe implements PipeTransform {
  transform(value: ISearchItem[] | null, inputValue?:string):ISearchItem[] | null {
    return (value as ISearchItem[]).filter((val) => val.snippet.title.toLowerCase().includes(inputValue?.toLowerCase() as string));
  }
}
