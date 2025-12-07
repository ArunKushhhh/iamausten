import AboutMe from "@/components/about/AboutMe";
import Experiences from "@/components/experiences/Experiences";
import MyHackathons from "@/components/hackathons/MyHackathons";
import Hero from "@/components/hero/Hero";
import MyWorks from "@/components/projects/MyWorks";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <MyWorks />
      <Experiences/>
      <MyHackathons />
      <AboutMe />
    </div>
  );
};

export default Home;
