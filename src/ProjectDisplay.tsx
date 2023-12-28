import { useParams } from 'react-router-dom';
import resources from './resources';

function ProjectDisplay() {
  const { id } = useParams();

  return (
    <div className="text-black">
      <h1>{resources[id - 1].name}</h1>
      <p>{resources[id - 1].details}</p>
    </div>
  );
}
export default ProjectDisplay;
