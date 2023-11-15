import axios from 'axios';

import type { Church } from '../interfaces/church';

import { useQuery } from '@tanstack/react-query';
import { useUrls } from './useUrls';

interface ChurchResponse {
  count: number;
  data: Church[];
}

export const useChurches = () => {
  const { baseUrl } = useUrls();

  return useQuery({
    queryKey: ['churches', baseUrl],
    queryFn: async () => {
      if (!baseUrl) return <ChurchResponse>{};
      const res = (await axios.get<ChurchResponse>(`${baseUrl}/get-churches`))
        .data;
      return res ?? <ChurchResponse>{};
    },
  });
};
