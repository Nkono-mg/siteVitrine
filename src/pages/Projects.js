import React from "react";
import Navigation from "../component/Navigation";
import ButtonsBottom from "../component/ButtonsBottom";

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <h2>Project1</h2>
        <ButtonsBottom left={"/"} right={"/projet-2"}/>
      </div>
    </main>
  );
};
export const Project2 = () => {
    return (
      <main>
        <div className="project">
          <Navigation/>
          <h2>Project2</h2>
          <ButtonsBottom left={"/projet-1"} right={"/projet-3"}/>
        </div>
      </main>
    );
  };
  export const Project3 = () => {
    return (
      <main>
        <div className="project">
          <Navigation/>
          <h2>Project3</h2>
          <ButtonsBottom left={"/projet-2"} right={"/projet-4"}/>
        </div>
      </main>
    );
  };
  export const Project4 = () => {
    return (
      <main>
        <div className="project">
          <Navigation/>
          <h2>Project4</h2>
          <ButtonsBottom left={"/projet-3"} right={"/contact"} />
        </div>
      </main>
    );
  };
