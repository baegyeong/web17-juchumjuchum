import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
// import { vi } from 'vitest';
import {
  useGetStocksByPrice,
  GetStockListResponse,
} from '@/apis/queries/stocks';
import { Stocks } from '@/pages/stocks';
describe('render stock main page', () => {
  const queryClient = new QueryClient();

  const mockMarketIndices = {
    kospi: { currentPrice: 2455.91, changeRate: -1.95, volume: 2496.93 },
    kosdaq: { currentPrice: 678.19, changeRate: -2.33, volume: 694.24 },
    exchange: { currentPrice: 0.0, changeRate: 0.0, volume: 0.0 },
  };

  const mockTopViews = [
    {
      id: '1',
      name: '삼성전자',
      currentPrice: 74600,
      changeRate: 2.34,
      volume: 12567432,
      marketCap: '4438957235',
      rank: 1,
      isRising: true,
    },
    {
      id: '2',
      name: 'SK하이닉스',
      currentPrice: 156700,
      changeRate: 3.15,
      volume: 5432167,
      marketCap: '1142341234',
      rank: 2,
      isRising: true,
    },
    {
      id: '3',
      name: 'LG에너지솔루션',
      currentPrice: 432000,
      changeRate: -1.23,
      volume: 892345,
      marketCap: '1012345678',
      rank: 3,
      isRising: false,
    },
    {
      id: '4',
      name: '현대차',
      currentPrice: 246800,
      changeRate: 0.89,
      volume: 1234567,
      marketCap: '876543210',
      rank: 4,
      isRising: true,
    },
    {
      id: '5',
      name: '카카오',
      currentPrice: 54200,
      changeRate: -2.45,
      volume: 3456789,
      marketCap: '654321987',
      rank: 5,
      isRising: false,
    },
  ];

  const mockTopFluctuations: GetStockListResponse = {
    result: [
      {
        id: '1',
        name: '삼성전자',
        currentPrice: 74600,
        changeRate: 2.34,
        volume: 12567432,
        marketCap: '4438957235',
        rank: 1,
        isRising: true,
      },
      {
        id: '2',
        name: 'SK하이닉스',
        currentPrice: 156700,
        changeRate: 3.15,
        volume: 5432167,
        marketCap: '1142341234',
        rank: 2,
        isRising: true,
      },
      {
        id: '3',
        name: 'LG에너지솔루션',
        currentPrice: 432000,
        changeRate: -1.23,
        volume: 892345,
        marketCap: '1012345678',
        rank: 3,
        isRising: false,
      },
      {
        id: '4',
        name: '현대차',
        currentPrice: 246800,
        changeRate: 0.89,
        volume: 1234567,
        marketCap: '876543210',
        rank: 4,
        isRising: true,
      },
      {
        id: '5',
        name: '카카오',
        currentPrice: 54200,
        changeRate: -2.45,
        volume: 3456789,
        marketCap: '654321987',
        rank: 5,
        isRising: false,
      },
      {
        id: '6',
        name: 'POSCO홀딩스',
        currentPrice: 478500,
        changeRate: 1.78,
        volume: 678901,
        marketCap: '543219876',
        rank: 6,
        isRising: true,
      },
      {
        id: '7',
        name: '삼성바이오로직스',
        currentPrice: 823000,
        changeRate: -0.67,
        volume: 234567,
        marketCap: '432198765',
        rank: 7,
        isRising: false,
      },
      {
        id: '8',
        name: 'LG화학',
        currentPrice: 534000,
        changeRate: 2.91,
        volume: 456789,
        marketCap: '321987654',
        rank: 8,
        isRising: true,
      },
      {
        id: '9',
        name: '현대모비스',
        currentPrice: 234500,
        changeRate: 0.45,
        volume: 567890,
        marketCap: '219876543',
        rank: 9,
        isRising: true,
      },
      {
        id: '10',
        name: 'KB금융',
        currentPrice: 62400,
        changeRate: -1.56,
        volume: 789012,
        marketCap: '198765432',
        rank: 10,
        isRising: false,
      },
      {
        id: '11',
        name: '네이버',
        currentPrice: 198500,
        changeRate: 1.23,
        volume: 890123,
        marketCap: '187654321',
        rank: 11,
        isRising: true,
      },
      {
        id: '12',
        name: '삼성SDI',
        currentPrice: 456700,
        changeRate: -0.89,
        volume: 901234,
        marketCap: '176543210',
        rank: 12,
        isRising: false,
      },
      {
        id: '13',
        name: '신한지주',
        currentPrice: 41200,
        changeRate: 0.78,
        volume: 1012345,
        marketCap: '165432109',
        rank: 13,
        isRising: true,
      },
      {
        id: '14',
        name: '카카오뱅크',
        currentPrice: 27800,
        changeRate: -1.45,
        volume: 2123456,
        marketCap: '154321098',
        rank: 14,
        isRising: false,
      },
      {
        id: '15',
        name: '삼성물산',
        currentPrice: 123400,
        changeRate: 1.67,
        volume: 3234567,
        marketCap: '143210987',
        rank: 15,
        isRising: true,
      },
      {
        id: '16',
        name: 'LG전자',
        currentPrice: 87600,
        changeRate: 2.12,
        volume: 4345678,
        marketCap: '132109876',
        rank: 16,
        isRising: true,
      },
      {
        id: '17',
        name: '기아',
        currentPrice: 98700,
        changeRate: -0.34,
        volume: 5456789,
        marketCap: '121098765',
        rank: 17,
        isRising: false,
      },
      {
        id: '18',
        name: '하나금융지주',
        currentPrice: 45600,
        changeRate: 0.56,
        volume: 6567890,
        marketCap: '110987654',
        rank: 18,
        isRising: true,
      },
      {
        id: '19',
        name: 'SK이노베이션',
        currentPrice: 167800,
        changeRate: -1.78,
        volume: 7678901,
        marketCap: '109876543',
        rank: 19,
        isRising: false,
      },
      {
        id: '20',
        name: 'SK텔레콤',
        currentPrice: 56700,
        changeRate: 1.34,
        volume: 8789012,
        marketCap: '98765432',
        rank: 20,
        isRising: true,
      },
    ],
  };

  it('renders kospi, kosdaq, exchange values correctly', async () => {
    const wrapper = () => (
      <QueryClientProvider client={queryClient}>
        <Stocks />
      </QueryClientProvider>
    );

    const { result } = renderHook(
      () => useGetStocksByPrice({ limit: 20, type: 'increase' }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.data).toBe(mockTopFluctuations));

  });
});
