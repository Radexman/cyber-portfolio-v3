import { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import testemonialsData from '../../testemonialsData';
import { TestemonialsTypes } from '../../Types/testemonials.types';

function Testemonials() {
  const [testemonial, setTestemonial] = useState<TestemonialsTypes[]>([]);

  useEffect(() => {
    setTestemonial(testemonialsData);
  }, []);

  return (
    <div className="container relative mx-auto min-h-screen text-base-100">
      <div className="mx-6 my-10 flex flex-col items-center text-center md:mx-0 md:items-start md:text-left">
        <h2 className="text-3xl">Testemonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, molestias?</p>
      </div>
      <div className="flex flex-col items-center space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        {testemonial.map((singleTestemonial) => {
          const { id, color, text, name, title, img } = singleTestemonial;

          return (
            <div key={id} className={`w-[90%] space-y-4 ${color} p-8`}>
              <p className="relative text-lg">
                <FaQuoteLeft className="absolute -left-5 -top-4" />
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
        })}
      </div>
    </div>
  );
}

export default Testemonials;
