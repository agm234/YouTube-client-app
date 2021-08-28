import { ISearchItem } from '../youtube/models/search-item-model';

export interface AppState {
  auth: IAuthState;
  cards: ICardsState;
}

export interface ICardsState {
  cards: ISearchItem<string>[];
  localVideos: ISearchItem<string>[];
}

export interface IAuthState {
  username?: string;
  isAuthorized: boolean;
}

export interface ILocalCardItem {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  publishedAt: number;
}
