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
              <div className="ml-0 flex items-center justify-start md:-ml-3">
                <img src={logo} alt="Chip logo" className="w-8 rotate-90" />
                <p className="pl-4 text-3xl text-secondary-content">Radosław Siek</p>
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
