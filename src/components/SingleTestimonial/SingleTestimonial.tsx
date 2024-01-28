import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonialsTypes } from '../../types/testimonials.types';

function SingleTestemonial({ color, text, img, name, title, id }: TestimonialsTypes) {
  return (
    <div data-testid="wrapper" className={`w-[90%] space-y-4 ${color} max-h-[30%] p-8 transition hover:scale-105`}>
      <p className="relative text-lg first-letter:text-xl">
        <FaQuoteLeft className="absolute -left-5 -top-5" />
        {text}
      </p>
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12">
          <img src={img} className={`customer-avatar rounded-full ${id === 2 && 'mt-3'}`} alt={`${name} avatar`} />
        </div>
        <div className="-space-y-1">
          <p className="text-lg">{name}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
export default SingleTestemonial;
