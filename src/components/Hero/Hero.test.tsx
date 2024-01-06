import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import Hero from './Hero';
import Projects from '../../pages/Projects/Projects';

describe('Hero component should', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
  });

  test('render correctly', () => {
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Frontend Developer_');
  });

  test('have redirect to projects section button', () => {
    expect(
      screen.getByRole('link', {
        name: 'Projects Webrunner RS9',
      })
    ).toHaveTextContent('ProjectsWebrunnerRS9');
  });

  test('redirect user to projects page on button click', () => {
    const redirectButton = screen.getByRole('link', {
      name: 'Projects Webrunner RS9',
    });

    fireEvent.click(redirectButton);

    render(
      <MemoryRouter initialEntries={['/projects']}>
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
