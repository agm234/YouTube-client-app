import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { SearchData } from 'src/app/app.constants';

import { IVideosResponse } from '../models/response-model';
import { ISearchItem } from '../models/search-item-model';

const { items } = SearchData;
@Injectable({
  providedIn: 'root',
})
export class SortdataService {
  items$ = new BehaviorSubject<ISearchItem[]>([]);

  private url = './assets/app-response.json';

  str$ = new Subject<string>();

  search$ = new Subject<string>();

  isDesc$ = new Subject<boolean>();

  searchStr$ = new Subject<string>();

  str:string;

  isDesc:boolean;

  videos ?:ISearchItem[];

  response?: IVideosResponse;

  constructor(private http: HttpClient) {
    this.str = '';
    this.isDesc = false;
    this.getCards();
  }

  getCards() {
    this.http.get<IVideosResponse>(this.url).subscribe((response) => {
      this.response = response;
      this.videos = response.items;
      this.items$.next(this.videos);
    });
  }

  gerCardById(id:string) {
    return items.find((el) => el.id === id);
  }

  setStr(str:string) {
    this.str$.next(str);
  }

  setSearch(str:string, isDesc:boolean) {
    if (str !== undefined) {
      this.str = str;
    }
    if (isDesc !== undefined) {
      this.isDesc = isDesc;
    }
    this.search$.next(this.str);
    this.isDesc$.next(this.isDesc);
  }

  setSearchStr(str:string) {
    this.searchStr$.next(str);
  }
}
