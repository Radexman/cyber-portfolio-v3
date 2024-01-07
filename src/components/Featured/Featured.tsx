import { Link } from 'react-router-dom';
import dummyProjectOne from '../../assets/dummy-project-1.png';
import dummyProjectTwo from '../../assets/dummy-project-2.png';
import dummyProjectTree from '../../assets/dummy-project-3.png';
import dummyProjectFour from '../../assets/dummy-project-4.png';

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
          <div>
            <div className="bg-accent p-12">
              <img src={dummyProjectOne} alt="" className="h-full w-full" />
            </div>
            <p>Overachiever</p>
            <p>Know More</p>
          </div>
          <div>
            <div className="bg-accent p-12">
              <img src={dummyProjectTwo} alt="" className="h-full w-full" />
            </div>
            <p>Overachiever</p>
            <p>Know More</p>
          </div>
          <div>
            <div className="bg-accent p-12">
              <img src={dummyProjectTree} alt="" className="h-full w-full" />
            </div>
            <p>Overachiever</p>
            <p>Know More</p>
          </div>
          <div>
            <div className="bg-accent p-12">
              <img src={dummyProjectFour} alt="" className="h-full w-full" />
            </div>
            <p>Overachiever</p>
            <p>Know More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
