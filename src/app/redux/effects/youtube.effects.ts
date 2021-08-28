import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { EMPTY, Observable } from 'rxjs';
import {
  catchError, debounceTime, map, switchMap,
} from 'rxjs/operators';

import { IVideosResponse } from '../../youtube/models/response-model';
import { SortDataService } from '../../youtube/services/sortdata.service';
import { fetchVideos, searchStr } from '../actions';

@Injectable()
export class CardsEffects {
  constructor(
    private actions: Actions,
    private sortDataService: SortDataService,
  ) {}

  loadCards: Observable< Action > = createEffect(() => this.actions.pipe(
    ofType(searchStr),
    debounceTime(500),
    switchMap(({ payload: query }) => this.sortDataService.searchCardsByQuery(query)
      .pipe(
        switchMap((ids: string[]) => this.sortDataService.getStatistics(ids).pipe(
          map((videos: IVideosResponse<string>) => fetchVideos({ payload: videos.items })),
        )),
        catchError(() => EMPTY),
      )),
  ));
}
