import { ISearchItem } from './search-item-model';

export interface ISearchResult {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: ISearchItem[];
}
interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
