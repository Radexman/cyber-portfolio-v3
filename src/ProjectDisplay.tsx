import { useParams } from 'react-router-dom';
import resources from './resources';

function ProjectDisplay() {
  const { id } = useParams();

  const resourceId = id ? parseInt(id, 10) - 1 : undefined;

  const resourceName = resourceId !== undefined && resources[resourceId] ? resources[resourceId].name : '';
  const resourceDetails = resourceId !== undefined && resources[resourceId] ? resources[resourceId].details : '';

  return (
    <div className="text-black">
      <h1>{resourceName}</h1>
      <p>{resourceDetails}</p>
    </div>
  );
}
export default ProjectDisplay;
