import { Link } from 'react-router-dom';
import { FaLongArrowAltRight as Arrow } from 'react-icons/fa';
import resources from '../../resources';

function Featured() {
  return (
    <div className="relative mt-4 min-h-screen bg-neutral">
      <div className="absolute -bottom-44 h-[60vh] w-full bg-accent" />
      <div className="container relative mx-auto ">
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
          <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:grid-rows-2 lg:gap-x-32 xl:gap-x-48">
            {resources.map((resource) => (
              <div key={resource.id} className="cyber-tile md:cyber-tile-big mx-auto w-[85%] shadow-2xl md:w-full">
                <div className="bg-primary p-4">
                  <img src={resource.imageUrl} alt={`${resource.name} landing page`} className="block h-full w-full" />
                  <div className="mt-2 space-y-2">
                    <p className="text-xl uppercase text-base-100">{resource.name}</p>
                    <p className="text-base-100">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam dolorem doloribus delectus
                      velit est commodi.
                    </p>
                    <Link to={`/${resource.id}`} className="group">
                      {/* <div className="mt-2 flex items-center space-x-3 text-secondary">
                        <p className="uppercase tracking-widest text-secondary group-hover:animate-glitch-1">
                          Learn More
                        </p>
                        <span className="group-hover:animate-glitch-4">
                          <Arrow size={20} />
                        </span>
                      </div> */}
                      <button
                        type="button"
                        className="cyber-button-small bg-red fg-white z-30 -ml-5 mt-2 scale-75 lg:-ml-0 lg:scale-100"
                      >
                        Learn More
                        <span className="glitchtext">{resource.name}</span>
                        <span className="tag">PR4</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
