import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { vi } from 'vitest';
import { useStockQueries } from '@/apis/queries/stocks';
import { server } from '@/mocks/server';
import { Stocks } from '@/pages/stocks';

beforeEach(() => server.listen());
afterAll(() => server.close());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('주식 지표 컴포넌트 테스트', () => {
  beforeAll(() => vi.clearAllMocks);

  it('주식 지표인 코스피, 코스닥, 환율 값을 fetching한다.', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useStockQueries({ viewsLimit: 5 }), {
      wrapper,
    });

    await waitFor(() => expect(result.current?.[0].data).toBeDefined());
  });

  it('코스피, 코스닥, 환율 텍스트를 렌더링한다.', async () => {
    vi.mock('react-router-dom');

    render(
      <QueryClientProvider client={queryClient}>
        <Stocks />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('코스피')).toBeInTheDocument();
      expect(screen.getByText('코스닥')).toBeInTheDocument();
      expect(screen.getByText('코스피')).toBeInTheDocument();
      expect(
        screen.getByText('지금 시장, 이렇게 움직이고 있어요.'),
      ).toBeInTheDocument();
    });
  });
});
