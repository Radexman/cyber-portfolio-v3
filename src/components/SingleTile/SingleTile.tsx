import { TilesTypes } from '../../types/tiles.types';

function SingleTile({ label, value }: TilesTypes) {
  return (
    <div className="flex h-28 flex-col items-center justify-center space-y-2 bg-primary">
      <p className="text-4xl text-secondary-content">{value}</p>
      <p>{label}</p>
    </div>
  );
}
export default SingleTile;
