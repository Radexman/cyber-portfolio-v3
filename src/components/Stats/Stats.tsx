import { FaLongArrowAltRight as Arrow } from 'react-icons/fa';
import programmingIcon from '../../assets/programming.svg';
import studyIcon from '../../assets/study.svg';
import freelancerIcon from '../../assets/freelancer.svg';

function Stats() {
  return (
    <div className="relative">
      <div className="flex">
        <div className="min-h-[150vh] w-1/2 bg-accent md:min-h-screen" />
        <div className="min-h-screen w-1/2" />
      </div>
      <div className="container mx-auto min-h-screen">
        <div className="container absolute top-0 my-6 text-base-100 md:my-0">
          <div className="flex min-h-[50vh] flex-col items-center justify-center space-x-0 space-y-7 md:flex-row md:space-x-7 md:space-y-0">
            <div className="flex w-[90%] flex-col justify-between space-y-2 bg-primary p-4 shadow-lg md:w-1/3 md:p-10">
              <img src={programmingIcon} className="w-14" alt="Programming on a desktop" />
              <span className="text-3xl">Programmer</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius.</p>
              <div className="flex items-center space-x-3 text-secondary-content">
                <p className="text-lg font-bold uppercase tracking-widest">Know More</p>
                <Arrow size={20} />
              </div>
            </div>
            <div className="flex w-[90%] flex-col justify-between space-y-2 bg-secondary p-4 shadow-lg md:w-1/3 md:p-10">
              <img src={studyIcon} className="w-14" alt="Programming on a desktop" />
              <span className="text-3xl">CS Student</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius.</p>
              <div className="flex items-center space-x-3">
                <p className="text-lg font-bold uppercase tracking-widest text-primary-content">Know More</p>
                <Arrow size={20} />
              </div>
            </div>
            <div className="flex w-[90%] flex-col justify-between space-y-2 bg-primary p-4 shadow-lg md:w-1/3 md:p-10">
              <img src={freelancerIcon} className="w-14" alt="Programming on a desktop" />
              <span className="text-3xl">Freelancer</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius.</p>
              <div className="flex items-center space-x-3 text-secondary-content">
                <p className="text-lg font-bold uppercase tracking-widest">Know More</p>
                <Arrow size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stats;
