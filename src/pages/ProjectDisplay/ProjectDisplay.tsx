import { useParams } from 'react-router-dom';
import { projectsData } from '../../appResources';

function ProjectDisplay() {
  const { id } = useParams();

  const resourceId = id ? parseInt(id, 10) - 1 : undefined;

  const resourceName = resourceId !== undefined && projectsData[resourceId] ? projectsData[resourceId].name : '';
  // const resourceDetails = resourceId !== undefined && projectsData[resourceId] ? projectsData[resourceId].details : '';
  const resourceImage = resourceId !== undefined && projectsData[resourceId] ? projectsData[resourceId].imageUrl : '';
  const resourceSummary = resourceId !== undefined && projectsData[resourceId] ? projectsData[resourceId].summary : '';

  return (
    <div className="container mx-auto">
      <div className="min-h-[60vh] text-primary-content">
        <div className="m-4 bg-primary p-4">
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-5 md:space-y-0">
            <div className="w-full md:w-1/3">
              <img src={resourceImage} alt={`${resourceName} landing page`} />
            </div>
            <div className="flex w-full flex-col justify-start space-y-2 md:w-2/3">
              <h1 className="text-5xl">{resourceName}</h1>
              <div className="flex flex-wrap gap-1">
                <div className="badge badge-warning badge-outline">Frontend</div>
                <div className="badge badge-secondary badge-outline">React</div>
                <div className="badge badge-info badge-outline">TypeScript</div>
                <div className="badge badge-info badge-outline">Unit Testing</div>
                <div className="badge badge-outline">Mobile First</div>
                <div className="badge badge-success badge-outline">Accesibility</div>
              </div>
              <p className="pt-2">{resourceSummary}</p>
              <div className="flex items-end justify-end">
                <button
                  type="button"
                  className="cyber-button-small bg-red fg-white z-30 -ml-5 mt-2 scale-75 lg:-ml-0 lg:scale-90"
                >
                  Visit Page
                  <span className="glitchtext">{resourceName}</span>
                  <span className="tag">{`PR${id}`}</span>
                </button>
                <button
                  type="button"
                  className="cyber-button-small bg-red fg-white z-30 -ml-5 mt-2 scale-75 lg:-ml-0 lg:scale-90"
                >
                  Visit Repo
                  <span className="glitchtext">{resourceName}</span>
                  <span className="tag">{`PR${id}`}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectDisplay;
