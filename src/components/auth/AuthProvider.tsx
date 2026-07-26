import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

/**
 * Wraps the application with Auth0Provider.
 * Reads domain and clientId from environment variables.
 * Uses the default redirect URI (window.location.origin).
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string;

  if (!domain || !clientId) {
    console.warn('Auth0 domain or clientId not set in environment variables');
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : undefined,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
