import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <p>Not Found</p>
      <Link to="/">
        <button type="button" className="btn btn-outline">
          Back To Home
        </button>
      </Link>
    </div>
  );
}
export default NotFound;
