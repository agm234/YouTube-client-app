import { ISearchItem } from './search-item-model';

export interface IVideosResponse<A=string> {
  kind: string
  etag: string
  pageInfo: IPageInfo
  items: ISearchItem<A>[]
}

interface IPageInfo {
  totalResults: number
  resultsPerPage: number
}
