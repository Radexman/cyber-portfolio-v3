import { NavLink } from 'react-router-dom';
import logo from '../../../assets/chip.svg';

function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="navbar h-[10vh]">
        <div className="flex-1">
          <p className="pr-2 text-3xl text-secondary-content">Radosław Siek</p>
          <img src={logo} alt="Chip logo" className="w-8 rotate-90" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg text-secondary-content">
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
        </div>
      </div>
    </div>
  );
}
export default Navbar;
