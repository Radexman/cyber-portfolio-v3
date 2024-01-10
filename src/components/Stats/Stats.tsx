import { useState } from 'react';
import TileLabels from '../../TileLabels';
import { LabelsTypes } from '../../Types/labels.types';

function Stats() {
  const [labels] = useState<LabelsTypes[]>(TileLabels);

  const renderPairTiles = (tiles: LabelsTypes[]) => {
    return tiles.map((tile) => (
      <div key={tile.id} className="flex h-28 flex-col items-center justify-center space-y-2 bg-primary">
        <p className="text-4xl text-secondary-content">{tile.value}</p>
        <p>{tile.label}</p>
      </div>
    ));
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col items-center justify-center space-y-7 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex w-[90%] flex-col items-center justify-center text-center md:w-1/3">
          <p className="text-8xl text-secondary-content">2+</p>
          <p className="text-2xl">Years Experience</p>
        </div>
        <div className="flex w-[90%] flex-col space-y-8 md:w-1/3">{renderPairTiles(labels.slice(0, 2))}</div>
        <div className="w-[90%] flex-col space-y-8 md:w-1/3">{renderPairTiles(labels.slice(2, 4))}</div>
      </div>
    </div>
  );
}

export default Stats;
