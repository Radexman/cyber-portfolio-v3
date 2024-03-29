import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/background-image.png';

function Hero() {
  return (
    <div
      id="projects-page"
      className="container mx-auto bg-cover bg-center filter md:min-h-[30vh]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="z-20 flex min-h-[91vh] flex-col items-center justify-center space-y-2 p-8 md:min-h-[43vh] md:items-start md:justify-start">
        <p className="text-3xl font-bold text-secondary-content">Hello Im Radek</p>
        <div className="max-w-xl space-y-1 border-primary-content pb-8 text-center text-base-100 md:text-left">
          <h1 className="text-7xl md:text-6xl">
            Frontend <span className="pl-8 md:pl-0">Developer</span>
            <span className="cyber-glitch-3">_</span>
          </h1>
          <p className="pb-4 text-xl">
            Crafting captivating web experiences is my forte, bringing life to every page and app I create.
          </p>
          <Link to="/projects">
            <button type="button" className="cyber-button bg-red fg-white z-30">
              Projects
              <span className="glitchtext">Webrunner</span>
              <span className="tag">RS9</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
