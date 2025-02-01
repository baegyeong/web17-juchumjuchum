import { http, HttpResponse } from 'msw';
import {
  GetStockListResponse,
  GetStockTopViewsResponse,
  StockIndexResponse,
} from '@/apis/queries/stocks';

export const stocksHandlers = [
  http.get(`/api/stock/fluctuation`, () => {
    return HttpResponse.json<GetStockListResponse>({
      result: [
        {
          id: '1',
          name: '삼성전자',
          currentPrice: 3,
          changeRate: 1.3,
          volume: 12,
          marketCap: '1.22',
          rank: 2,
          isRising: false,
        },
      ],
    });
  }),

  http.get(`/api/stock/index`, () => {
    return HttpResponse.json<StockIndexResponse[]>([
      {
        name: '삼성전자',
        currentPrice: '1.3',
        changeRate: '1.3',
        volume: 12,
        high: '3',
        low: '2',
        open: '3',
        updatedAt: '2024-02-01T12:30:00Z',
      },
    ]);
  }),

  http.get(`/api/stock/topViews`, () => {
    return HttpResponse.json<Partial<GetStockTopViewsResponse[]>>([
      {
        id: '1',
        name: '삼성전자',
        currentPrice: 1.3,
        changeRate: 1.3,
        volume: 12,
        marketCap: '1.22',
        rank: 2,
        isRising: false,
      },
    ]);
  }),
];
