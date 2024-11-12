import React from "react";

import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import LeftSideBar from "../../components/left-side-bar/LeftSideBar";
import RightSideBar from "../../components/right-side-bar/RightSideBar";
const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="side-bar">
        <LeftSideBar />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
