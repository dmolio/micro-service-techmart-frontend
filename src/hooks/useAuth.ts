import { useQuery, useMutation, useQueryClient } from 'react-query';
import { authService, LoginCredentials } from '../services/auth';

export function useAuth() {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery(
    'currentUser',
    () => authService.getCurrentUser(),
    { retry: false }
  );

  const loginMutation = useMutation(
    (credentials: LoginCredentials) => authService.login(credentials),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('currentUser');
      },
    }
  );

  const logoutMutation = useMutation(
    () => authService.logout(),
    {
      onSuccess: () => {
        queryClient.setQueryData('currentUser', null);
      },
    }
  );

  return {
    user,
    isLoading,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginLoading: loginMutation.isLoading,
    loginError: loginMutation.error,
  };
}
