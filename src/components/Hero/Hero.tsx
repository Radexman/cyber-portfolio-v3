// import backgroundImageUrl from '../../assets/background.jpg';
import backgroundImageGradientUrl from '../../assets/background-gradient.png';

function Hero() {
  return (
    <div
      className="container mx-auto min-h-[90vh] bg-cover bg-center filter md:min-h-[30vh]"
      style={{
        backgroundImage: `url(${backgroundImageGradientUrl})`,
      }}
    >
      <div className="z-20 flex min-h-[90vh] flex-col items-center justify-center space-y-2 p-4 md:min-h-[43vh] md:items-start md:justify-start">
        <div className="max-w-xl space-y-2 border-primary-content text-center text-base-100 md:text-left">
          <p className="text-3xl font-bold text-secondary-content">Hello Im Radek</p>
          <h1 className="text-6xl font-bold">
            Frontend Developer<span className="cyber-glitch-3">_</span>{' '}
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eu purus mattis, quis ultricies
            velit molestie.
          </p>
        </div>
        <button type="button" className="cyber-button bg-red fg-white z-30">
          Projects
          <span className="glitchtext">Webrunner</span>
          <span className="tag">RS9</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
