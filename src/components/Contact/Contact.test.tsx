import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Contact from './Contact';

describe('Contact component should', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test('render correctly', () => {
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "Let's work together on your next project",
      })
    ).toHaveTextContent("Let's work together on your next project");
  });

  test('have contact button', () => {
    expect(
      screen.getByRole('button', {
        name: 'Contact Webrunner RS9',
      })
    ).toHaveAttribute('type', 'button');
  });
});
