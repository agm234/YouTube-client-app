export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: Istatistics;
}
interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnailsItem;
    medium: IThumbnailsItem;
    high: IThumbnailsItem;
    standard: IThumbnailsItem;
    maxres: IThumbnailsItem;
  }
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string,
  localized: ILocalizedItem;
  defaultAudioLanguage: string;
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
interface Istatistics{
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
