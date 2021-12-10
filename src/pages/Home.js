import React from "react";
import DynamicText from "../component/DynamicText";
import Navigation from "../component/Navigation";
import SocialNetwork from "../component/SocialNetwork";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>FS AGENCY</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
