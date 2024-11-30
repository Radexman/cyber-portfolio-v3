import { useContext } from 'react';
import SingleTestemonial from '../SingleTestimonial/SingleTestimonial';
import AppContext from '../../context/AppContext';

function Testemonials() {
  const { testimonials } = useContext(AppContext);

  return (
    <div className="container relative mx-auto text-base-100">
      <div className="mx-2 my-10 flex flex-col items-center text-center md:mx-4 lg:items-start lg:text-left">
        <h2 className="text-3xl">Testimonials</h2>
        <p>
          The testimonials section showcases firsthand accounts from clients, highlighting the quality and
          professionalism of my work and affirming client satisfaction and value.
        </p>
      </div>
      <div className="mx-2 flex flex-col items-center space-x-0 space-y-8 text-justify md:mx-4 lg:flex-row lg:items-start lg:space-x-8 lg:space-y-0">
        {testimonials.map((testimonial) => {
          const { id, color, text, name, title, img } = testimonial;

          return <SingleTestemonial key={id} id={id} color={color} text={text} name={name} title={title} img={img} />;
        })}
      </div>
    </div>
  );
}

export default Testemonials;
