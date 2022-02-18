import React from "react";
// import { Typography } from "@material-ui/core";
import HeroSection from "../../Components/HeroSection";
import MapCarasoulTopArtist from "../../Components/mapCarasoulTopArtist";

import MapCardOne from "../../Components/MapCardOne";
import CardTwo from "../../Components/CardTwo";

const Home = () => {
  return (
    <>
      {/* <Typography variant="h1">Hello </Typography> */}
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
        <CardTwo />
      </div>
    </>
  );
};

export default Home;
