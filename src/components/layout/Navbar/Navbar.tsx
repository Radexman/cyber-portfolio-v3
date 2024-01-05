import { NavLink } from 'react-router-dom';
import logo from '../../../assets/chip.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {
  return (
    <div className="container sticky top-0 z-50 mx-auto bg-neutral">
      <div className="navbar h-[10vh]">
        <div className="flex-1">
          <p className="pr-2 text-3xl text-secondary-content md:text-4xl">Radosław Siek</p>
          <img src={logo} alt="Chip logo" className="w-6 rotate-90 md:w-8" />
        </div>
        <div>
          <ul className="menu menu-horizontal hidden px-1 text-xl text-secondary-content md:flex">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
