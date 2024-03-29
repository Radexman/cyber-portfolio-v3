import { FaReact as ReactIcon } from 'react-icons/fa';
import { IoLogoJavascript as JavaScriptIcon } from 'react-icons/io5';
import { SiTailwindcss as TailwindIcon } from 'react-icons/si';

function QualificationsSection() {
  return (
    <div className="flex flex-col items-center justify-between space-y-2 bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
      <h3 className="text-2xl ">Qualifications</h3>
      <div className="h-[2px] w-80 bg-primary" />
      <p className="text-justify lg:text-left">
        I am a Computer Science student at AG in Katowice, specializing in programming and databases, as it has always
        been not only my work but also my genuine passion. I have acquired multiple certifications in frontend
        competencies, including React, JavaScript, and Tailwind CSS. You can preview or download them by clicking on the
        respective technology names.
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
