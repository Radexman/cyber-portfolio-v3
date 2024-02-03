import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SingleProject from './SingleProject';

const mockProject = {
  id: 1,
  name: 'Project 1',
  details: 'Lorem ipsum details',
  summary: 'Lorem ipsum summary',
  imageUrl: 'url/images/jpg-1',
};

describe('SingleProject component', () => {
  test('renders project details correctly', () => {
    render(
      <MemoryRouter>
        <SingleProject project={mockProject} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('project-container')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', `${mockProject.imageUrl}`);
  });
});
