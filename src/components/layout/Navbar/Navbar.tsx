import { NavLink } from 'react-router-dom';
import logo from '../../../assets/chip.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="navbar h-[10vh]">
        <div className="flex-1">
          <p className="pr-2 text-2xl text-secondary-content md:text-3xl">Radosław Siek</p>
          <img src={logo} alt="Chip logo" className="w-6 rotate-90 md:w-8" />
        </div>
        <div>
          <ul className="menu menu-horizontal hidden px-1 text-lg text-secondary-content md:flex">
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
