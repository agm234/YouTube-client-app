export interface ISearchItem<A=string> {
  kind?: string;
  etag?: string;
  id: A;
  snippet: ISnippet;
  statistics: Istatistics;
}
export interface IId{
  kind: string;
  videoId: string;
}
export interface ISnippet {
  publishedAt: string;
  channelId?: string;
  title: string;
  description: string;
  thumbnails: {
    default?: IThumbnailsItem;
    medium?: IThumbnailsItem;
    high?: IThumbnailsItem;
    standard?: IThumbnailsItem;
    maxres?: IThumbnailsItem;
  }
  channelTitle?: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string,
  localized?: ILocalizedItem;
  defaultAudioLanguage?: string;
}
interface IThumbnailsItem {
  url: string;
  width: number;
  height: number;
}
interface ILocalizedItem {
  title: string;
  description: string;
}
export interface Istatistics{
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
