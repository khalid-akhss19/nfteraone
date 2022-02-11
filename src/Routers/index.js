import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
// import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const Routers = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
