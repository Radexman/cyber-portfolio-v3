import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import SingleProject from '../SingleProject/SingleProject';

function Featured() {
  const { projects } = useContext(AppContext);

  return (
    <div className="relative mt-20 min-h-screen bg-neutral md:mt-4">
      <div className="absolute -bottom-52 h-[80vh] w-full bg-accent" />
      <div className="container relative mx-auto">
        <div className="mx-5 flex flex-col items-center justify-center text-center md:mx-0 md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col space-y-2 text-base-100">
            <h2 className="text-3xl">Featured Projcts</h2>
            <p>
              Explore a selection of my recent work and standout creations, showcasing my latest projects and top-notch
              accomplishments.
            </p>
          </div>
          <div>
            <Link to="/projects">
              <button type="button" className="cyber-button-small bg-red fg-white z-30 mt-4">
                All Projects
                <span className="glitchtext">See</span>
                <span className="tag">PR4</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-16 space-y-2">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-rows-2 md:gap-y-12 lg:gap-x-32 xl:gap-x-56">
            {projects.slice(0, 4).map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
