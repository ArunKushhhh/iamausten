import Hero from "@/components/hero/Hero";
import MyWorks from "@/components/projects/MyWorks";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <MyWorks />
    </div>
  );
};

export default Home;
