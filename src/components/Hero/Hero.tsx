// import backgroundImageUrl from '../../assets/background.jpg';
import backgroundImageGradientUrl from '../../assets/background-gradient.png';

function Hero() {
  return (
    <div
      className="container mx-auto min-h-[90vh] bg-opacity-70 bg-cover bg-center md:min-h-[30vh]"
      style={{
        backgroundImage: `url(${backgroundImageGradientUrl})`,
      }}
    >
      <div className="flex min-h-[90vh] flex-col items-start space-y-2 px-2 pb-0 pl-0 md:min-h-[30vh] md:justify-start md:pb-12 md:pl-8">
        <div className="max-w-lg border-primary-content text-center text-base-100 md:text-left">
          <p className="text-xl font-bold text-secondary-content">Hello Im Radek</p>
          <h1 className="text-5xl font-bold">Frontend Developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eu purus mattis, quis ultricies
            velit molestie.
          </p>
        </div>
        <button type="button" className="cyber-button-small bg-red fg-white z-30">
          Projects
          <span className="glitchtext">Some edgy txt</span>
          <span className="tag">R25</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
