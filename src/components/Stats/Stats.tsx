import { useContext } from 'react';
// import tileLabels from '../../tileLabels';
import { TilesTypes } from '../../Types/tiles.types';
import SingleTile from '../SingleTile/SingleTile';
import AppContext from '../../context/AppContext';

function Stats() {
  const { tiles } = useContext(AppContext);

  const renderPairTiles = (resources: TilesTypes[]) => {
    return resources.map((resource) => {
      const { id, label, value } = resource;
      return <SingleTile label={label} value={value} id={id} />;
    });
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col items-center justify-center space-y-7 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex w-[90%] flex-col items-center justify-center text-center md:w-1/3">
          <p className="text-8xl text-secondary-content">2+</p>
          <p className="text-2xl">Years Experience</p>
        </div>
        <div className="flex w-[90%] flex-col space-y-8 md:w-1/3">{renderPairTiles(tiles.slice(0, 2))}</div>
        <div className="w-[90%] flex-col space-y-8 md:w-1/3">{renderPairTiles(tiles.slice(2, 4))}</div>
      </div>
    </div>
  );
}

export default Stats;
