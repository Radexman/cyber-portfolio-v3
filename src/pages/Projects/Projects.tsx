import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import SingleProject from '../../components/SingleProject/SingleProject';

function Projects() {
  const { projects } = useContext(AppContext);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto text-primary-content">
        <h1 className="text-3xl">Projects</h1>
        <p>
          In this section you can preview more of my projects both my private websites and webapps and my client work.
        </p>
        <div className="mt-16 space-y-2">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:grid-rows-2 md:gap-y-12 lg:gap-x-32 xl:gap-x-56">
            {projects.map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
