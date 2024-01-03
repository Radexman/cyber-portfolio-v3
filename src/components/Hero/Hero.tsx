import backgroundImageUrl from '../../assets/background.jpg';

function Hero() {
  return (
    <div
      className="flex h-[89vh] items-center justify-start bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="container">
        <div className="max-w-lg border-2 border-primary-content p-4 text-left">
          <p className="text-lg font-bold text-secondary">Hello Im Radek</p>
          <h1 className="text-5xl font-bold">Frontend Developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eu purus mattis, quis ultricies
            velit molestie.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
