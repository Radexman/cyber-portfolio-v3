import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import PrivateProjectsSection from './PrivateProjectsSection';

describe('PrivateProjectsSection component should', () => {
  test('render correctly', () => {
    render(<PrivateProjectsSection />);

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Experience',
      })
    ).toHaveTextContent('Experience');
  });
});
