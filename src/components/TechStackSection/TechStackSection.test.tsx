import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import TechStackSection from './TechStackSection';

describe('TechStackSection Component should', () => {
  test('render correctly', () => {
    render(<TechStackSection />);

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Tech Stack',
      })
    ).toHaveTextContent('Tech Stack');
  });
});
