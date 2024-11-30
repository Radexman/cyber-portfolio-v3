import { NavLink, Link } from 'react-router-dom';
import logo from '../../../assets/chip.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-neutral">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <Link to="/">
              <div className="-ml-2 flex items-center justify-start">
                <img src={logo} alt="Chip logo" className="w-8 rotate-90" />
                <p className="pl-4 text-3xl text-secondary-content">Radosław Siek</p>
              </div>
            </Link>
          </div>
          <div>
            <ul className="menu menu-horizontal hidden text-xl text-secondary-content md:flex">
              <li className="hover:animate-glitch-4">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:animate-glitch-4">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li className="hover:animate-glitch-4">
                <NavLink to="/about">About Me</NavLink>
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
