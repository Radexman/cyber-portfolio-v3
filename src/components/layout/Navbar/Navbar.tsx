import { NavLink, Link } from 'react-router-dom';
import logo from '../../../assets/chip.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-neutral">
      <div className="container mx-auto">
        <div className="navbar h-[11vh]">
          <div className="flex-1">
            <Link to="/">
              <div className="flex items-center justify-center">
                <p className="pr-2 text-3xl text-secondary-content md:text-4xl">Radosław Siek</p>
                <img src={logo} alt="Chip logo" className="w-6 rotate-90 md:w-8" />
              </div>
            </Link>
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
    </div>
  );
}
export default Navbar;
