import { useParams } from 'react-router-dom';
import resources from './resources';

function ProjectDisplay() {
  const { id } = useParams();

  const resourceId = id ? parseInt(id, 10) - 1 : undefined;

  const resourceName = resourceId !== undefined && resources[resourceId] ? resources[resourceId].name : '';
  const resourceDetails = resourceId !== undefined && resources[resourceId] ? resources[resourceId].details : '';
  const resourceImage = resourceId !== undefined && resources[resourceId] ? resources[resourceId].imageUrl : '';

  return (
    <div className="text-black">
      <h1>{resourceName}</h1>
      <p>{resourceDetails}</p>
      <img src={resourceImage} alt="" />
    </div>
  );
}
export default ProjectDisplay;
