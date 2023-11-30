import axios from 'axios';

import type { News } from '../interfaces/news';

import { useQuery } from '@tanstack/react-query';
import { useUrls } from './useUrls';

interface NewsResponse {
  count: number;
  data: News[];
}

export const useNews = () => {
  const { baseUrl } = useUrls();

  return useQuery({
    queryKey: ['news', baseUrl],
    queryFn: async () => {
      if (!baseUrl) return <NewsResponse>{};
      const res = (await axios.get<NewsResponse>(`${baseUrl}/get-news`)).data;
      return res ?? <NewsResponse>{};
    },
  });
};
