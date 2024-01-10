import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component should', () => {
  test('render correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('link', {
        name: 'Chip logo Radosław Siek',
      })
    ).toHaveTextContent('Radosław Siek');
  });
});
