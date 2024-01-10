import { Link } from 'react-router-dom';
import logo from '../../../assets/chip.svg';

function Footer() {
  return (
    <div className="bg-primary">
      <footer className="container footer mx-auto mt-16 p-10 text-base-100">
        <aside>
          <img src={logo} alt="" className="w-16 rotate-90" />
          <p className="">
            Portfolio Radosław Siek
            <br />
            React Frontend Developer
          </p>
        </aside>
        <nav>
          <header className="footer-title">Menu</header>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Me
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <header className="footer-title">My Socials</header>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/rados%C5%82aw-siek-320b66209/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Radexman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
export default Footer;
