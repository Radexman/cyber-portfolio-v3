import { Link } from 'react-router-dom';
import { FaLongArrowAltRight as Arrow } from 'react-icons/fa';
import Stats from '../Stats/Stats';
import programmingIcon from '../../assets/programming.svg';
import studyIcon from '../../assets/study.svg';
import freelancerIcon from '../../assets/freelancer.svg';

function Perks() {
  return (
    <div>
      <div className="flex">
        <div className="md:min-h-auto min-h-[170vh] w-1/2 bg-accent md:min-h-[120vh]" />
        <div className="min-h-screen w-1/2" />
      </div>
      <div className="container mx-auto min-h-screen md:min-h-full">
        <div className="container absolute top-0 my-10 text-base-100 md:my-0">
          <div className="flex min-h-[50vh] flex-col items-center justify-center space-x-0 space-y-10 md:flex-row md:space-x-8 md:space-y-0">
            <div className="flex w-[85%] flex-col items-center justify-between space-y-2 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:w-1/3 md:items-start md:p-6 md:text-left">
              <img src={programmingIcon} className="w-14" alt="Programming on a desktop" />
              <span className="text-3xl">Programmer</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reprehenderit, eius.
              </p>
              <Link to="/about" className="group">
                <div className="flex items-center space-x-3 text-secondary-content">
                  <p className="text-lg uppercase tracking-widest">Know More</p>
                  <span className="group-hover:animate-glitch-4">
                    <Arrow size={20} />
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex w-[85%] flex-col items-center justify-between space-y-2 bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:w-1/3 md:items-start md:p-6 md:text-left">
              <img src={studyIcon} className="w-14" alt="Programming on a desktop" />
              <span className="text-3xl">CS Student</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reprehenderit, eius.
              </p>
              <Link to="/about">
                <div className="group flex items-center space-x-3">
                  <p className="text-lg font-bold uppercase tracking-widest text-primary-content">Know More</p>
                  <span className="group-hover:animate-glitch-4">
                    <Arrow size={20} />
                  </span>
                </div>
              </Link>
            </div>
            <div className="flex w-[85%] flex-col items-center justify-between space-y-2 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:w-1/3 md:items-start md:p-6 md:text-left">
              <img src={freelancerIcon} className="w-14" alt="Programming on a desktop" />
              <span className="text-3xl">Freelancer</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reprehenderit, eius.
              </p>
              <Link to="/about">
                <div className="group flex items-center space-x-3 text-secondary-content">
                  <p className="text-lg font-bold uppercase tracking-widest">Know More</p>
                  <span className="group-hover:animate-glitch-4">
                    <Arrow size={20} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <Stats />
        </div>
      </div>
    </div>
  );
}
export default Perks;
