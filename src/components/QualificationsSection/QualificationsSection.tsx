import { FaReact as ReactIcon } from 'react-icons/fa';
import { IoLogoJavascript as JavaScriptIcon } from 'react-icons/io5';
import { SiTailwindcss as TailwindIcon } from 'react-icons/si';

function QualificationsSection() {
  return (
    <div className="flex flex-col items-center justify-between space-y-2 bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
      <h3 className="text-2xl ">Qualifications</h3>
      <div className="h-[2px] w-80 bg-primary" />
      <p className="text-justify lg:text-left">
        I am a dedicated programming coach at Coding Giants and a freelance developer specializing in delivering
        high-quality web pages and applications. My professional journey has been deeply enriched by extensive online
        bootcamps and certifications, which have provided me with advanced knowledge in frontend technologies. I hold
        certifications in React, JavaScript, and Tailwind CSS, reflecting my commitment to mastering these essential
        tools and delivering top-notch solutions. These credentials underscore my expertise and dedication to continuous
        improvement in the ever-evolving field of web development.
      </p>
      <ul className="flex flex-row gap-4 lg:flex-col lg:gap-2">
        <li>
          <a className="flex items-center gap-1 hover:underline" href="assets\react-certyfikat.pdf" target="_blank">
            <ReactIcon />
            React
          </a>
        </li>
        <li>
          <a
            href="assets\javascript-certyfikat.pdf"
            target="_blank"
            className="flex items-center gap-1 hover:underline"
          >
            <JavaScriptIcon />
            JavaScript
          </a>
        </li>
        <li>
          <a href="assets\tailwind-certyfikat.pdf" target="_blank" className="flex items-center gap-1 hover:underline">
            <TailwindIcon />
            Tailwind CSS
          </a>
        </li>
      </ul>
    </div>
  );
}
export default QualificationsSection;
