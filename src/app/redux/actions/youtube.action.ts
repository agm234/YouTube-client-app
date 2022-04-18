import { createAction, props } from '@ngrx/store';

import { ISearchItem } from '../../youtube/models/search-item-model';
import { ILocalCardItem } from '../state.models';

export const searchStr = createAction('searchStr', props<{ payload: string } >());
export const getCards = createAction('getCards');
export const getCard = createAction('getCard', props<{ payload:ISearchItem<string> }>());
export const fetchVideos = createAction('fetchVideos', props<{ payload: ISearchItem<string>[] } >());
export const createCard = createAction('createVideo', props<{ payload: ILocalCardItem }>());
export const hideCards = createAction('hideCards');
