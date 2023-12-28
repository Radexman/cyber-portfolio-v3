import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import resources from '../resources';

function Home() {
  const [projects, setProjects] = useState(resources);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Projects</h1>
      <div className="text-black">
        {projects.map((project) => (
          <button
            className="btn btn-outline"
            type="button"
            key={project.id}
            onClick={() => {
              navigate(`/${project.id}`);
            }}
          >
            {project.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
