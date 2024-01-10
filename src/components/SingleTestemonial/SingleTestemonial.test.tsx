import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import SingleTestemonial from './SingleTestemonial';
import { TestemonialsTypes } from '../../Types/testemonials.types';

describe('SingleTestemonial component should', () => {
  const mockTestemonial: TestemonialsTypes = {
    id: 1,
    color: 'bg-secondary',
    text: 'Lorem Ipsum',
    name: 'Jane Doe',
    title: 'CEO',
    img: 'image/url',
  };

  test('render text and image correctly', () => {
    render(
      <SingleTestemonial
        id={mockTestemonial.id}
        color={mockTestemonial.color}
        text={mockTestemonial.text}
        name={mockTestemonial.name}
        title={mockTestemonial.title}
        img={mockTestemonial.img}
      />
    );

    const textElement = screen.getByText('Lorem Ipsum');
    const nameElement = screen.getByText('Jane Doe');
    const imageElement = screen.getByRole('img');
    const titleElement = screen.getByText('CEO');
    const divElement = screen.getByTestId('wrapper');

    expect(textElement).toHaveTextContent('Lorem Ipsum');
    expect(nameElement).toHaveTextContent('Jane Doe');
    expect(imageElement).toHaveAttribute('src', 'image/url');
    expect(titleElement).toHaveTextContent('CEO');
    expect(divElement).toHaveClass('bg-secondary');
  });
});
