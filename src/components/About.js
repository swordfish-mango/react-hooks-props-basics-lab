import React from "react";
import Links from "./Links";

function About(prop) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {renderBio(prop.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={prop.links}/>
    </div>
  );
}

function renderBio(bio) {
  if(bio && bio !== "") {
    return <p>{bio}</p>;
  }
  return;
}

export default About;
