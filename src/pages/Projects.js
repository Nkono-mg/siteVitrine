import React from "react";
import Navigation from "../component/Navigation";
import ButtonsBottom from "../component/ButtonsBottom";
import Logo from "../component/Logo";
import Project from "../component/Project";
import Mouse from "../component/Mouse";

export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <ButtonsBottom left={"/"} right={"/projet-2"} />
      </div>
    </main>
  );
};
export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonsBottom left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};
export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonsBottom left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};
export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonsBottom left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};
