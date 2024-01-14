import Contact from '../../components/Contact/Contact';
import Featured from '../../components/Featured/Featured';
import Hero from '../../components/Hero/Hero';
import Perks from '../../components/Perks/Perks';
import Testemonials from '../../components/Testimoinial/Testimonials';

function Home() {
  return (
    <div>
      <Hero />
      <div className="relative min-h-screen">
        <div className="absolute min-h-screen w-1/2 bg-accent" />
        <Perks />
      </div>
      <Featured />
      <Testemonials />
      <Contact />
    </div>
  );
}
export default Home;
