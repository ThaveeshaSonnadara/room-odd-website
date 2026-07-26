import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * Buttons for logging in with Google or Facebook via Auth0 social connections.
 * Styling follows the Tuple design system (bg-accent, rounded, hover effects).
 */
export const LoginButtons: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = (connection: string) => () => {
    loginWithRedirect({ connection });
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleLogin('google-oauth2')}
        className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label="Log in with Google"
      >
        Google
      </button>
      <button
        onClick={handleLogin('facebook')}
        className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label="Log in with Facebook"
      >
        Facebook
      </button>
    </div>
  );
};
