import { FaReact as ReactIcon, FaSass as SASSIcon, FaPython as PythonIcon, FaGitAlt as GitIcon } from 'react-icons/fa';
import { TbBrandTypescript as TypeScriptIcon } from 'react-icons/tb';
import {
  SiTailwindcss as TailwindIcon,
  SiJest as JestIcon,
  SiVitest as VitestIcon,
  SiVite as ViteIcon,
  SiEslint as EslintIcon,
} from 'react-icons/si';
import { IoLogoJavascript as JavaScriptIcon, IoLogoFirebase as FirebaseIcon } from 'react-icons/io5';
import { IoLogoCss3 as CSSIcon, IoLogoHtml5 as HTMLIcon } from 'react-icons/io';

function TechStackSection() {
  return (
    <div className="flex flex-col items-center space-y-2 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
      <h3 className="text-2xl text-secondary-content">Tech Stack</h3>
      <div className="h-[2px] w-80 bg-secondary" />
      <div className='text-justify lg:text-left'>
        I specialize in React 18, React Router, and Redux to build dynamic, scalable web applications. My expertise
        includes TypeScript and JavaScript (ES6+), complemented by in-depth experience with Firebase for backend
        development. I follow a Test-Driven Development (TDD) approach, using Jest, React Testing Library (RTL), and
        Vitest to ensure robust, reliable applications.
      </div>
      <div>
        <p className="text-lg">Main Technologies</p>
      </div>
      <ul className="flex flex-wrap gap-3">
        <li className="badge flex items-center">
          <ReactIcon />
          <p className="pl-1">React</p>
        </li>
        <li className="badge flex items-center">
          <TypeScriptIcon />
          <p className="pl-1">TypeScript</p>
        </li>
        <li className="badge flex items-center">
          <TailwindIcon />
          <p className="pl-1">Tailwind CSS</p>
        </li>
        <li className="badge flex items-center">
          <JestIcon />
          <p className="pl-1">Jest</p>
        </li>
      </ul>
      <div className="pt-4">
        <p className="text-lg">All Technologies</p>
      </div>
      <div>
        <ul className="flex flex-wrap gap-3">
          <li className="badge flex items-center">
            <JavaScriptIcon />
            <p className="pl-1">JavaScript</p>
          </li>
          <li className="badge flex items-center">
            <FirebaseIcon />
            <p className="pl-1">Firebase</p>
          </li>
          <li className="badge flex items-center">
            <PythonIcon />
            <p className="pl-1">Python</p>
          </li>
          <li className="badge flex items-center">
            <CSSIcon />
            <p className="pl-1">CSS</p>
          </li>
          <li className="badge flex items-center">
            <HTMLIcon />
            <p className="pl-1">HTML</p>
          </li>
          <li className="badge flex items-center">
            <SASSIcon />
            <p className="pl-1">SASS</p>
          </li>
          <li className="badge flex items-center">
            <VitestIcon />
            <p className="pl-1">Vitest</p>
          </li>
          <li className="badge flex items-center">
            <EslintIcon />
            <p className="pl-1">ESlint</p>
          </li>
          <li className="badge flex items-center">
            <ViteIcon />
            <p className="pl-1">Vite</p>
          </li>
          <li className="badge flex items-center">
            <GitIcon />
            <p className="pl-1">Git</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default TechStackSection;
