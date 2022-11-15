import Image from 'next/image';

import Button from './button';
import styles from './projects.module.css';

interface Project {
  image: string;
  name: string;
  tech: string[];
}

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <div className='container mx-auto mt-8'>
      <div className='flex justify-between items-center'>
        <h2 className='text-white text-xl font-bold'>Projects</h2>
        <Button>Contact Me</Button>
      </div>
      <div className='grid grid-cols-2 gap-8 my-20'>
        {projects.map((project, index) => (
          <div key={index}>
            <div className={`relative w-100 ${styles.imageWrapper}`}>
              <Image
                src={project.image}
                alt='Project'
                fill
              />
            </div>
            <h3 className='text-white mt-4 mb-2 text-md font-bold'>
              {project.name}
            </h3>
            <div className='flex gap-4 uppercase'>
              {project.tech.map((tec, index) => (
                <p
                  className='text-grey-100 text-sm font-medium'
                  key={index}
                >
                  {tec}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
