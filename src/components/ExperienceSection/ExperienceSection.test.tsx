import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import ExperienceSection from './ExperienceSection';

describe('ExperienceSection component should', () => {
  test('render correctly', () => {
    render(<ExperienceSection />);

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Experience',
      })
    ).toHaveTextContent('Experience');
  });
});
