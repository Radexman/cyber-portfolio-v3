import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero component should', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Hero />
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

  test('have working redirect to projects section button', () => {
    expect(
      screen.getByRole('link', {
        name: 'Projects Webrunner RS9',
      })
    ).toHaveTextContent('ProjectsWebrunnerRS9');
  });
});
