import { FaReact as ReactIcon, FaSass as SASSIcon, FaPython as PythonIcon, FaGitAlt as GitIcon } from 'react-icons/fa';
import { TbBrandTypescript as TypeScriptIcon } from 'react-icons/tb';
import {
  SiTailwindcss as TailwindIcon,
  SiJest as JestIcon,
  SiVitest as VitestIcon,
  SiVite as ViteIcon,
} from 'react-icons/si';
import { IoLogoJavascript as JavaScriptIcon } from 'react-icons/io5';
import { IoLogoCss3 as CSSIcon, IoLogoHtml5 as HTMLIcon } from 'react-icons/io';
import profilePicture from '../../assets/profile-picture.png';

function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto space-y-6 text-primary-content">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex h-60 items-center justify-center">
            <div className="avatar w-[50%]">
              <div className="rounded">
                <img src={profilePicture} alt="Front facing young man with brown hair" />
              </div>
            </div>
          </div>
          <div className="col-span-2 h-60 bg-primary p-4">
            <h1 className="text-2xl uppercase">Bio</h1>
            <div>
              <h2>Experience</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis odio nostrum animi suscipit
                fuga perferendis recusandae iusto sed ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis odio nostrum animi suscipit fuga perferendis recusandae iusto sed ducimus.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-3 lg:p-0">
          <div className="flex flex-col items-center space-y-3 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
            <h3 className="text-2xl text-secondary-content">Tech Stack</h3>
            <div>
              <p className="text-lg">Main Technologies</p>
              <div className="h-[2px] w-80 bg-secondary" />
            </div>
            <ul className="flex space-x-3">
              <li className="flex items-center">
                <ReactIcon />
                <p className="pl-1">React</p>
              </li>
              <li className="flex items-center">
                <TypeScriptIcon />
                <p className="pl-1">TypeScript</p>
              </li>
              <li className="flex items-center">
                <TailwindIcon />
                <p className="pl-1">Tailwind CSS</p>
              </li>
              <li className="flex items-center">
                <JestIcon />
                <p className="pl-1">Jest</p>
              </li>
            </ul>
            <div className="pt-4">
              <p className="text-lg">All Technologies</p>
              <div className="h-[2px] w-80 bg-secondary" />
            </div>
            <div>
              <ul className="flex flex-wrap space-x-3">
                <li className="flex items-center">
                  <JavaScriptIcon />
                  <p className="pl-1">JavaScript</p>
                </li>
                <li className="flex items-center">
                  <PythonIcon />
                  <p className="pl-1">Python</p>
                </li>
                <li className="flex items-center">
                  <CSSIcon />
                  <p className="pl-1">CSS</p>
                </li>
                <li className="flex items-center">
                  <HTMLIcon />
                  <p className="pl-1">HTML</p>
                </li>
                <li className="flex items-center">
                  <SASSIcon />
                  <p className="pl-1">SASS</p>
                </li>
              </ul>
              <ul className="flex flex-wrap space-x-3">
                <li className="flex items-center">
                  <VitestIcon />
                  <p className="pl-1">Vitest</p>
                </li>
                <li className="flex items-center">
                  <ViteIcon />
                  <p className="pl-1">Vite</p>
                </li>
                <li className="flex items-center">
                  <GitIcon />
                  <p className="pl-1">Git</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
            <h3 className="text-2xl">Experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between space-y-2 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
            <h3 className="text-2xl text-secondary-content">Qualifications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center space-x-0 space-y-10 md:flex-row md:space-x-10 md:space-y-0">


        </div>
        <div className="flex min-h-[50vh] flex-col items-center justify-center space-x-0 space-y-10 md:flex-row md:space-x-10 md:space-y-0">

          <div className="flex w-[85%] flex-col items-center justify-between space-y-2 bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:w-1/3 md:items-start md:p-6 md:text-left">
            <h3 className="text-xl">Experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
          </div>
          <div className="flex w-[85%] flex-col items-center justify-between space-y-2 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:w-1/3 md:items-start md:p-6 md:text-left">
            <h3 className="text-xl text-secondary-content">Qualifications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, eius.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default About;
