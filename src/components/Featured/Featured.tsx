import { Link } from 'react-router-dom';
import { FaLongArrowAltRight as Arrow } from 'react-icons/fa';
import resources from '../../resources';

function Featured() {
  return (
    <div className="container mx-auto mt-4 min-h-screen bg-neutral">
      <div className="mx-5 flex flex-col items-center justify-center text-center md:mx-0 md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col space-y-2 text-base-100">
          <h2 className="text-3xl">Featured Projcts</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ipsa!</p>
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
        <div className="grid grid-cols-1 place-content-center gap-16 md:grid-cols-2 md:grid-rows-2">
          {resources.map((resource) => (
            <div key={resource.id} className="mx-auto w-[85%] md:w-full">
              <div className="bg-accent p-4 md:p-12">
                <img src={resource.imageUrl} alt="" className="h-full w-full" />
              </div>
              <div className="mt-2 space-y-2">
                <p className="text-2xl uppercase text-base-100">{resource.name}</p>
                <Link to={`/${resource.id}`} className="group">
                  <div className="flex items-center space-x-3 text-secondary">
                    <p className="text-lg uppercase tracking-widest text-secondary group-hover:animate-glitch-1">
                      Learn More
                    </p>
                    <span className="group-hover:animate-glitch-4">
                      <Arrow size={20} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Featured;
