import styles from './experience.module.css';

type Experience = {
  name: string;
  experience: number;
};

interface Props {
  experience: Experience[];
}

const Experience = ({ experience }: Props) => {
  return (
    <div
      className={`container mx-auto py-16 grid ${styles.grid} gap-10 max-sm:border-b-1 max-sm:border-white max-sm:border-solid`}
    >
      {experience.map((exp, index) => {
        return (
          <div
            className='text-white max-sm:text-center'
            key={index}
          >
            <h1 className='text-lg font-bold'>{exp.name}</h1>
            <p className='text-sm text-grey-100 font-medium'>
              {exp.experience} years Experience
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
