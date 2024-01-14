import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import SingleTile from './SingleTile';
import { TilesTypes } from '../../types/tiles.types';

describe('SingleTile component should', () => {
  const mockTile: TilesTypes = {
    id: 1,
    label: 'Label',
    value: 'Value',
  };

  test('render correctly label and value props', () => {
    render(<SingleTile label={mockTile.label} value={mockTile.value} id={mockTile.id} />);

    const labelElement = screen.getByText('Label');
    const valueElement = screen.getByText('Value');

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
