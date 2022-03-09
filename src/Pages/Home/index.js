import React from "react";
// import { Typography } from "@material-ui/core";
import HeroSection from "../../Components/HeroSection";
import MapCarasoulTopArtist from "../../Components/mapCarasoulTopArtist";

import MapCardOne from "../../Components/MapCardOne";
import MapCardTwo from "../../Components/mapCardTwo";
import StartCollection from "../../Components/StartCollection";
import LoveByCommunity from "../../Components/LoveByCommunity";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <MapCarasoulTopArtist />
      </div>
      <div>
        <MapCardOne />
      </div>
      <div>
        <MapCardTwo />
      </div>
      <div>
        <StartCollection />
      </div>
      <div>
        <LoveByCommunity />
      </div>
    </>
  );
};

export default Home;
