import AboutMe from "@/components/about/AboutMe";
import Experiences from "@/components/experiences/Experiences";
import MyHackathons from "@/components/hackathons/MyHackathons";
import Hero from "@/components/hero/Hero";
import MyWorks from "@/components/projects/MyWorks";

const Home = () => {
  return (
    <>
      <div className="w-full bg-white h-full relative z-1 rounded-b-[40px] lf:rounded-b-[80px] mb-[70vh]">
        <Hero />
        <MyWorks />
        <Experiences />
        <MyHackathons />
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
