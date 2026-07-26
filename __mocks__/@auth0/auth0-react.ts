// Mock for @auth0/auth0-react used in Jest tests
// Provides a minimal useAuth0 hook returning default unauthenticated state.
export const useAuth0 = () => ({
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  loginWithRedirect: () => {},
  logout: () => {},
});
