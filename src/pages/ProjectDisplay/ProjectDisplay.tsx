import { useParams } from 'react-router-dom';
import { projectsData } from '../../appResources';

function ProjectDisplay() {
  const { id } = useParams();

  const resourceId = id ? parseInt(id, 10) - 1 : undefined;

  const resourceName = resourceId !== undefined && projectsData[resourceId] ? projectsData[resourceId].name : '';
  const resourceImage = resourceId !== undefined && projectsData[resourceId] ? projectsData[resourceId].imageUrl : '';
  const resourceSummary = resourceId !== undefined && projectsData[resourceId] ? projectsData[resourceId].summary : '';
  const resourceTags = resourceId !== undefined && projectsData[resourceId] ? projectsData[resourceId].tags : '';

  return (
    <div className="container mx-auto">
      <div className="min-h-[51vh] text-primary-content">
        <div className="bg-secondary-focus mt-11 p-4 lg:bg-primary">
          <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="w-full lg:w-1/3">
              <img src={resourceImage} alt={`${resourceName} landing page`} />
            </div>
            <div className="flex w-full flex-col justify-start space-y-2 lg:w-2/3">
              <h1 className="text-center text-5xl lg:text-left">{resourceName}</h1>
              <div className="flex flex-wrap justify-center gap-1 lg:justify-start">
                {Array.isArray(resourceTags) ? (
                  resourceTags.map((tag) => (
                    <p className="badge badge-outline" key={resourceId}>
                      {tag}
                    </p>
                  ))
                ) : (
                  <p>No project tags available</p>
                )}
              </div>
              <p className="pt-2 text-justify lg:text-left">{resourceSummary}</p>
              <div className="flex items-center justify-center lg:items-end lg:justify-end">
                <button
                  type="button"
                  className="cyber-button-small md:cyber-button bg-red fg-white z-30 -ml-5 mt-2 scale-75 lg:-ml-0"
                >
                  Visit Page
                  <span className="glitchtext">{resourceName}</span>
                  <span className="tag">{`PR${id}`}</span>
                </button>
                <button
                  type="button"
                  className="cyber-button-small md:cyber-button bg-red fg-white z-30 -ml-5 mt-2 scale-75 lg:-ml-0"
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
