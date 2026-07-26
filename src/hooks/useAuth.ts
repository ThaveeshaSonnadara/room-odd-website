import { useAuth0 } from '@auth0/auth0-react';

/**
 * Custom hook exposing only the fields we need across the app.
 * Returns the authentication state, user profile, and loading flags.
 */
export const useAuth = () => {
  const { isAuthenticated, user, isLoading, loginWithRedirect, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: typeof window !== 'undefined' ? window.location.origin : undefined });
  };

  return {
    isAuthenticated,
    user,
    isLoading,
    loginWithRedirect,
    logout: handleLogout,
  };
};
