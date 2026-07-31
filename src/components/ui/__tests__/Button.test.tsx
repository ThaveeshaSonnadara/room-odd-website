import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonLight } from '../Button';

describe('Button Component', () => {
  it('renders button with label', () => {
    render(<Button>Book Consultation</Button>);
    expect(screen.getByRole('button', { name: /book consultation/i })).toBeInTheDocument();
  });

  it('renders as a link when href is provided', () => {
    render(<Button href="/contact">Contact Us</Button>);
    const link = screen.getByRole('link', { name: /contact us/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('renders ButtonLight component correctly', () => {
    render(<ButtonLight>Light Button</ButtonLight>);
    expect(screen.getByRole('button', { name: /light button/i })).toBeInTheDocument();
  });
});
