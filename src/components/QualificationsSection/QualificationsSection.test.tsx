import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import QualificationsSection from './QualificationsSection';

describe('QualificationsSection component should', () => {
  test('render correctly', () => {
    render(<QualificationsSection />);

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Qualifications',
      })
    ).toHaveTextContent('Qualifications');
  });
});
