import { Link } from 'react-router-dom';
import { SingleProjectProps } from './SingleProjectProps.types';

function SingleProject({ project }: SingleProjectProps) {
  const { id, name, sentence, imageUrl } = project;

  return (
    <div data-testid="project-container" key={id} className="cyber-tile md:cyber-tile-big mx-auto w-[80%] md:w-full">
      <div className="bg-primary p-5">
        <img src={imageUrl} alt={`${name} landing page`} className="block h-full w-full" />
        <div className="mt-2 space-y-3">
          <p className="text-xl uppercase text-base-100">{name}</p>
          <p className="text-justify text-base-100 md:text-left">{sentence}</p>
          <Link to={`/${id}`} className="group">
            <button
              type="button"
              className="cyber-button-small bg-red fg-white z-30 -ml-5 mt-2 scale-75 lg:-ml-0 lg:scale-100"
            >
              Learn More
              <span className="glitchtext">{name}</span>
              <span className="tag">{`PR${id}`}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SingleProject;
