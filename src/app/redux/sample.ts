import { ISearchItem } from '../youtube/models/search-item-model';
import { ILocalCardItem } from './state.models';

export const transformToCard = ({
  title, imageUrl, publishedAt, description,
}: ILocalCardItem): ISearchItem<string> => ({
  id: String(publishedAt),
  snippet: {
    title: `${title}`,
    publishedAt: new Date(publishedAt).toDateString(),
    description: `${description}`,
    thumbnails: {
      default: {
        url: imageUrl,
        width: 640,
        height: 480,
      },
    },
  },
  statistics: {
    viewCount: '0',
    likeCount: '0',
    dislikeCount: '0',
    commentCount: '0',
    favoriteCount: '0',
  },
});
