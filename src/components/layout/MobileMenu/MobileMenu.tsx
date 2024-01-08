import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`menu-toggle fixed right-3 top-5 z-50 flex h-[30px] w-[30px] cursor-pointer flex-col justify-between border-none bg-transparent p-0 md:hidden ${
          isOpen ? 'open' : ''
        }`}
        onClick={handleButtonClick}
      >
        <div className="bar1 h-[4px] w-full bg-secondary-content transition-all duration-300" />
        <div className="bar2 h-[4px] w-full bg-secondary-content transition-all duration-300" />
        <div className="bar3 h-[4px] w-full bg-secondary-content transition-all duration-300" />
      </button>
      <div
        className={`fixed right-0 top-0 z-40 h-full w-4/5 transform bg-neutral shadow-lg transition-transform duration-300 md:w-1/2 lg:w-1/3 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <p className="mb-4 text-5xl font-bold text-primary-content">Menu</p>
          <ul className="space-y-8 text-xl">
            <li>
              <NavLink
                to="/"
                className="block text-secondary-content transition duration-300  "
                onClick={handleButtonClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="block text-secondary-content transition duration-300 "
                onClick={handleButtonClick}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-secondary-content transition duration-300 "
                onClick={handleButtonClick}
              >
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
