import { http, HttpResponse } from 'msw';
import { GetLoginStatus } from '@/apis/queries/auth/schema';

export const authHandlers = [
  http.get(`/api/auth/status`, () => {
    return HttpResponse.json<GetLoginStatus>({
      message: 'Not Authenticated',
    });
  }),
];
