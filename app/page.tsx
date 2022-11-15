import Navbar from './navbar';
import HeroSection from './heroSection';
import Experience from './experience';

const getExperience = async () => {
  const data = await fetch('http://localhost:3000/api/experience');
  return data.json();
};

export default async function Home() {
  const data = await getExperience();

  return (
    <>
      <Navbar />
      <HeroSection />
      <Experience experience={data.data} />
    </>
  );
}
