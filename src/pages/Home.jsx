import React from "react";
import Header from "../components/Header";
import DigitalPlatform from "../components/DigitalPlatform";
import News from "../components/News";
import OurPartners from "../components/OurPartners";

const Home = () => {
  return (
    <div>
      <Header />
      <DigitalPlatform />
      <News />
      <OurPartners />
    </div>
  );
};

export default Home;
