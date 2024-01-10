import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="min-h-screen text-base-100">
      <h1>Projects</h1>
      <Link to="/">
        <button type="button">Back To Home</button>
      </Link>
    </div>
  );
}
export default Projects;
