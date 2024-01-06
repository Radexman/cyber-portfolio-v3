import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component should', () => {
  test('full app rendering/navigating', () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Frontend Developer_');
  });

  test('render projects page', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Projects',
      })
    ).toHaveTextContent('Projects');
  });

  test('render about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'About',
      })
    ).toHaveTextContent('About');
  });
});
