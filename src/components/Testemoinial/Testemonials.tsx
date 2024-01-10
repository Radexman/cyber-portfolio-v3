import { useState, useEffect } from 'react';
import testemonialsData from '../../testemonialsData';
import { TestemonialsTypes } from '../../Types/testemonials.types';
import SingleTestemonial from '../SingleTestemonial/SingleTestemonial';

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

          return <SingleTestemonial id={id} color={color} text={text} name={name} title={title} img={img} />;
        })}
      </div>
    </div>
  );
}

export default Testemonials;
