import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('NotFound component should', () => {
  test('include return to home page link', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveTextContent('Back To Home');
  });
});
