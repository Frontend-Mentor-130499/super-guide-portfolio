import Navbar from './comp/navbar';
import HeroSection from './comp/heroSection';
import Experience from './comp/experience';
import Projects from './comp/projects';
import ContactForm from './comp/contact';

const getExperience = async () => {
  const data = await fetch('http://localhost:3000/api/experience');
  return data.json();
};

const getProjects = async () => {
  const data = await fetch('http://localhost:3000/api/projects');
  return data.json();
};

export default async function Home() {
  const data = await getExperience();
  const projects = await getProjects();

  return (
    <>
      <Navbar />
      <HeroSection />
      <Experience experience={data.data} />
      <Projects projects={projects.data} />
      <ContactForm />
    </>
  );
}
