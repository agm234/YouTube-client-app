import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, ICardsState } from '../state.models';

export const featureKey = 'cards';

export const selectCards = createFeatureSelector<AppState, ICardsState>(featureKey);

export const selectVideosState = createSelector(
  selectCards,
  (state: ICardsState) => [...state.cards, ...state.localVideos],
);

export const selectVideoItemState = createSelector(
  selectCards,
  (state: ICardsState, props: { id: string }) => [...state.cards, ...state.localVideos].find(({ id }) => id === props.id),
);
