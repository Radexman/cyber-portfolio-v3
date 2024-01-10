import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen text-base-100">
      <h1>About</h1>
      <Link to="/">
        <button type="button">Back To Home</button>
      </Link>
    </div>
  );
}
export default About;
