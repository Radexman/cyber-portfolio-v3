import { FaQuoteLeft } from 'react-icons/fa';
import { TestemonialsTypes } from '../../Types/testemonials.types';

function SingleTestemonial({ color, text, img, name, title }: TestemonialsTypes) {
  return (
    <div data-testid="wrapper" className={`w-[90%] space-y-4 ${color} p-8 transition hover:scale-105`}>
      <p className="relative text-lg first-letter:text-xl">
        <FaQuoteLeft className="absolute -left-5 -top-5" />
        {text}
      </p>
      <div className="flex items-center space-x-4">
        <div>
          <img src={img} className="h-12 w-12 rounded-full" alt={`${name} profile`} />
        </div>
        <div className="-space-y-2">
          <p className="text-lg">{name}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
export default SingleTestemonial;
