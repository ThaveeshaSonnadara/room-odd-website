jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './page';

// Helper to render ContactPage with mocked auth state
const renderWithAuth = (isAuthenticated = false) => {
  const { useAuth } = require('@/hooks/useAuth');
  useAuth.mockReturnValue({
    isAuthenticated,
    isLoading: false,
    user: isAuthenticated ? { name: 'Test User' } : undefined,
    loginWithRedirect: jest.fn(),
    logout: jest.fn(),
  });
  render(<ContactPage />);
};

test('shows login buttons when not authenticated', () => {
  renderWithAuth(false);
  expect(screen.getByRole('button', { name: /google/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument();
});

test('shows contact form when authenticated', () => {
  renderWithAuth(true);
  expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument();
});