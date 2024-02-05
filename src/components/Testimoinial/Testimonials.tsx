import { useContext } from 'react';
import SingleTestemonial from '../SingleTestimonial/SingleTestimonial';
import AppContext from '../../context/AppContext';

function Testemonials() {
  const { testimonials } = useContext(AppContext);

  return (
    <div className="container relative mx-auto text-base-100">
      <div className="mx-6 my-10 flex flex-col items-center text-center md:mx-0 md:items-start md:text-left">
        <h2 className="text-3xl">Testimonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, molestias?</p>
      </div>
      <div className="flex flex-col items-center space-x-0 space-y-8 text-justify md:flex-row md:items-start md:space-x-8 md:space-y-0">
        {testimonials.map((testimonial) => {
          const { id, color, text, name, title, img } = testimonial;

          return <SingleTestemonial key={id} id={id} color={color} text={text} name={name} title={title} img={img} />;
        })}
      </div>
    </div>
  );
}

export default Testemonials;
