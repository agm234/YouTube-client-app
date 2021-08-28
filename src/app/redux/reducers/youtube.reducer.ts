import { Action, createReducer, on } from '@ngrx/store';

import {
  createCard, fetchVideos, getCards, hideCards,
} from '../actions';
import { transformToCard } from '../sample';
import { ICardsState } from '../state.models';

export const initialState: ICardsState = {
  cards: [],
  localVideos: [],
};

const reducer = createReducer(initialState,
  on(fetchVideos, (state, action) => ({ ...state, cards: action.payload })),
  on(getCards, (state) => ({ ...state })),
  on(hideCards, (state) => ({ ...state, cards: [] })),
  on(createCard, (state, action) => ({ ...state, localVideos: [...state.localVideos, transformToCard(action.payload)] })));
export function cardsReducer(state: ICardsState | undefined, action: Action) {
  return reducer(state, action);
}
