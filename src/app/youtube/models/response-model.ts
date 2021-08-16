import { ISearchItem } from './search-item-model';

export interface IVideosResponse {
  kind: string
  etag: string
  pageInfo: IPageInfo
  items: ISearchItem[]
}

interface IPageInfo {
  totalResults: number
  resultsPerPage: number
}
