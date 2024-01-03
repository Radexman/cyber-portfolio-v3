import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Link to="/">
        <button type="button">Back To Home</button>
      </Link>
    </div>
  );
}
export default Projects;
