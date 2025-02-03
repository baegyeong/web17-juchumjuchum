import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { UserThemeSchema, type GetUserTheme } from './schema';
import { get } from '@/apis/utils/get';
import { LoginContext } from '@/contexts/login';

const getUserTheme = () =>
  get<GetUserTheme>({
    schema: UserThemeSchema,
    url: '/api/user/theme',
  });

export const useGetUserTheme = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return useQuery({
    queryKey: ['userTheme'],
    queryFn: getUserTheme,
    staleTime: 1000 * 60 * 30,
    enabled: isLoggedIn,
    select: (data) => data.theme,
  });
};
