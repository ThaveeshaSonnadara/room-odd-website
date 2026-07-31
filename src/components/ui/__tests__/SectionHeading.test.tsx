import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionHeading } from '../SectionHeading';

describe('SectionHeading Component', () => {
  it('renders label, title, and subtitle correctly', () => {
    render(
      <SectionHeading
        label="01 / SERVICES"
        title="Design Disciplines"
        subtitle="Our architectural services description"
      />
    );

    expect(screen.getByText('01 / SERVICES')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /design disciplines/i })).toBeInTheDocument();
    expect(screen.getByText('Our architectural services description')).toBeInTheDocument();
  });

  it('supports dark mode variant', () => {
    render(<SectionHeading title="Dark Heading" dark />);
    const heading = screen.getByRole('heading', { level: 2, name: /dark heading/i });
    expect(heading).toHaveClass('text-white');
  });
});
