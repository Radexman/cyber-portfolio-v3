import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import Projects from '../../pages/Projects/Projects';

describe('Hero component should', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });

  test('render correctly', () => {
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Frontend Developer_');
  });

  test('render projects page on button click', () => {
    userEvent.click(
      screen.getByRole('link', {
        name: 'Projects Webrunner RS9',
      })
    );

    render(
      <MemoryRouter initialEntries={['./projects']}>
        <Projects />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Projects',
      })
    ).toHaveTextContent('Projects');
  });
});
