import { FaReact as ReactIcon } from 'react-icons/fa';

function QualificationsSection() {
  return (
    <div className="flex flex-col items-center justify-between space-y-2 bg-primary p-4 text-center shadow-xl transition hover:scale-105 md:items-start md:p-6 md:text-left">
      <h3 className="text-2xl text-secondary-content">Qualifications</h3>
      <p>
        I have acquiered multiple certifications from the frontend compenencies including React JavaScript and Tailwind
        CSS.
      </p>
      <ul>
        <li>React</li>
        <li>JavaScrit</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
}
export default QualificationsSection;
