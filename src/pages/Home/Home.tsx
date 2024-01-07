import Featured from '../../components/Featured/Featured';
import Hero from '../../components/Hero/Hero';
import Perks from '../../components/Perks/Perks';

function Home() {
  return (
    <div>
      <Hero />
      <div className="relative min-h-screen">
        <div className="absolute min-h-screen w-1/2 bg-accent" />
        <Perks />
      </div>
      <Featured />
    </div>
  );
}
export default Home;
