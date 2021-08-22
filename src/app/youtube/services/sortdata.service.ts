import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  BehaviorSubject, Observable, of, Subject,
} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { API_SEARCH_URL, API_VIDEO_URL } from 'src/app/app.constants';

import { IVideosResponse } from '../models/response-model';
import { IId, ISearchItem } from '../models/search-item-model';

@Injectable({
  providedIn: 'root',
})
export class SortdataService {
  items$ = new BehaviorSubject<ISearchItem[]>([]);

  search$ = new Subject<string>();

  filter$ = new Subject<string>();

  isDesc$ = new Subject<boolean>();

  searchStr$ = new Subject<string>();

  items?:ISearchItem[];

  str:string;

  globalsearch?:string;

  isDesc:boolean;

  videos ?:ISearchItem[];

  response?: IVideosResponse;

  constructor(private http: HttpClient) {
    this.str = '';
    this.isDesc = false;
    this.items = [];
  }

  getCards(str?:string) {
    this.searchCardsByQuery((str as string || this.globalsearch as string))
      .subscribe((videoIds: string[]) => this.getStatistics(videoIds)
        .subscribe(({ items }: IVideosResponse<string>) => {
          this.items = items;
          this.items$.next(items);
        }));
  }

  getCard(id:string) {
    return this.getStatistics(id).pipe(switchMap((data:IVideosResponse<string>) => of(data.items[0])));
  }

  searchCardsByQuery(qeury:string) {
    const params: any = {
      type: 'video',
      part: 'snippet',
      maxResults: 15,
      q: qeury,
    };
    return this.http.get < IVideosResponse<IId>>(API_SEARCH_URL, { params }).pipe(
      map((data) => data.items.map(({ id }) => id.videoId)),
    );
  }

  getStatistics(ids: string[] | string): Observable<any> {
    const id = typeof ids === 'string' ? ids : ids.join(',');
    const params: any = {
      id,
      part: 'snippet,statistics',
    };

    return this.http.get(API_VIDEO_URL, { params });
  }

  setStr(str:string) {
    this.search$.next(str);
  }

  setFilter(str:string, isDesc:boolean) {
    if (str !== undefined) {
      this.str = str;
    }
    if (isDesc !== undefined) {
      this.isDesc = isDesc;
    }
    this.filter$.next(this.str);
    this.isDesc$.next(this.isDesc);
  }

  setSearchStr(str:string) {
    this.searchStr$.next(str);
  }
}
