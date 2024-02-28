import { FaReact as ReactIcon } from 'react-icons/fa';
import { IoLogoJavascript as JavaScriptIcon } from 'react-icons/io5';
import { SiTailwindcss as TailwindIcon } from 'react-icons/si';

function QualificationsSection() {
  return (
    <div className="flex flex-col items-center justify-between space-y-2 bg-secondary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
      <h3 className="text-2xl text-secondary-content">Qualifications</h3>
      <p>
        I am a Computer Science student at AG in Katowice, specializing in programming and databases, as it has always
        been not only my work but also my genuine passion. I have acquired multiple certifications in frontend
        competencies, including React, JavaScript, and Tailwind CSS. You can preview or download them by clicking on the
        respective technology names.
      </p>
      <ul>
        <li>
          <a
            className="flex items-center gap-1 hover:underline"
            href="src\assets\documents\cv-radosław-siek.pdf"
            target="_blank"
          >
            <ReactIcon />
            React
          </a>
        </li>
        <li>
          <a
            href="src\assets\documents\javascript-certyfikat.pdf"
            target="_blank"
            className="flex items-center gap-1 hover:underline"
          >
            <JavaScriptIcon />
            JavaScript
          </a>
        </li>
        <li>
          <a
            href="src\assets\documents\tailwind-certyfikat.pdf"
            target="_blank"
            className="flex items-center gap-1 hover:underline"
          >
            <TailwindIcon />
            Tailwind CSS
          </a>
        </li>
      </ul>
    </div>
  );
}
export default QualificationsSection;
