import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import resources from './resources';

function Template() {
  const [projects, setProjects] = useState(resources);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-accent ">
      <h1 className="text-primary-content">Projects</h1>
      <div className="text-primary-content">
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

export default Template;
