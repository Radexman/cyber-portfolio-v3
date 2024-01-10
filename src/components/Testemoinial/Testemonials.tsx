import { FaQuoteLeft } from 'react-icons/fa';

function Testemonials() {
  return (
    <div className="container relative mx-auto min-h-screen text-base-100">
      <div className="mx-6 my-5 flex flex-col items-center text-center md:mx-0 md:items-start md:text-left">
        <h2 className="text-3xl">Testemonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, molestias?</p>
      </div>
      <div className="flex flex-col items-center space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <div className="w-[90%] space-y-4 bg-secondary p-8">
          <p className="typing relative text-lg">
            <FaQuoteLeft className="absolute -left-5 -top-4" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quibusdam impedit harum, eum est fugiat, ut et
            nulla aut nisi, velit laboriosam amet obcaecati itaque! Cumque aliquid pariatur culpa.
          </p>
          <div className="flex items-center space-x-4">
            <div>
              <img src="https://randomuser.me/api/portraits/women/75.jpg" className="h-12 w-12 rounded-full" alt="" />
            </div>
            <div className="-space-y-2">
              <p className="text-lg">Jane Doe</p>
              <p>Founder and CEO</p>
            </div>
          </div>
        </div>
        <div className="w-[90%] space-y-4 bg-primary p-8">
          <p className="relative text-lg">
            <FaQuoteLeft className="absolute -left-5 -top-4" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quibusdam impedit harum, eum est fugiat, ut et
            nulla aut nisi, velit laboriosam amet obcaecati itaque! Cumque aliquid pariatur culpa.
          </p>
          <div className="flex items-center space-x-4">
            <div>
              <img src="https://randomuser.me/api/portraits/men/22.jpg" className="h-12 w-12 rounded-full" alt="" />
            </div>
            <div className="-space-y-2">
              <p className="text-lg">John Doe</p>
              <p>Founder and CEO</p>
            </div>
          </div>
        </div>
        <div className="w-[90%] space-y-4 bg-primary p-8">
          <p className="relative text-lg">
            <FaQuoteLeft className="absolute -left-5 -top-4" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quibusdam impedit harum, eum est fugiat, ut et
            nulla aut nisi, velit laboriosam amet obcaecati itaque! Cumque aliquid pariatur culpa.
          </p>
          <div className="flex items-center space-x-4">
            <div>
              <img src="https://randomuser.me/api/portraits/women/3.jpg" className="h-12 w-12 rounded-full" alt="" />
            </div>
            <div className="-space-y-2">
              <p className="text-lg">John Doe</p>
              <p>Founder and CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testemonials;
