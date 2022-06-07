import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>You may say I'm a dreamer... but I'm not the only one</p>
    <img src={image} alt="I made this"></img>
  </div>
  );
}

export default About;
