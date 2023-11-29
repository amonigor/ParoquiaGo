// import axios from 'axios';

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
      // if (!baseUrl) return <NewsResponse>{};
      // const res = (await axios.get<NewsResponse>(`${baseUrl}/get-news`))
      //   .data;
      // return res ?? <NewsResponse>{};

      return <NewsResponse>{
        count: 3,
        data: [
          {
            header:
              'Diocese de Santos participa da Reunião Estadual da 6ª Semana Social Brasileira do Regional Sul 1.',
            link: 'https://www.diocesedesantos.com.br/noticias/presenca-diocesana/noticias/diocese-de-santos-participa-da-reuniao-estadual-da-6-semana-social-brasileira-do-regional-sul-1',
            date: '24-11-2023',
          },
          {
            header:
              'Ministério de Dança de Praia Grande comemora 20 anos com apresentação no PDA.',
            link: 'https://www.diocesedesantos.com.br/noticias/presenca-diocesana/noticias/ministerio-de-danca-de-praia-grande-comemora-20-anos-com-apresentacao-no-pda',
            date: '21-11-2023',
          },
          {
            header: 'Solenidade de Cristo Rei do Universo.',
            link: 'https://www.diocesedesantos.com.br/noticias/presenca-diocesana/noticias/se-aproxima-o-grande-encontro-diocesano',
            date: '10-11-2023',
          },
        ],
      };
    },
  });
};
