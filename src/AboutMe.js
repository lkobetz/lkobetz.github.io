import React from "react";
import "./App.css";
import bagan from "./images/bagan.jpg";
import glass_temple from "./images/glass_temple.JPG";
import berlin from "./images/berlin.jpg";

export default props => {
  return (
    <div className={"Section-header"}>
      <div className={"text"}>
        <h2>About Me</h2>
        <div className={"section"}>
          <h5>
            Formerly an ESL teacher, I'm a graduate and fellow of the Grace
            Hopper Program at Fullstack Academy. I love learning everything I
            can about software development, solving problems, building apps, and
            writing clean, maintainable, readable code.
            <br></br>
            <br></br>I also love traveling, reading, exploring, and playing
            games. I've lived in England, Thailand, and Malaysia and have
            visited about 20 other countries.
          </h5>
          <div className={"photos"}>
            <img className={"about_me_photo"} src={bagan} alt={""}></img>
            <img className={"about_me_photo"} src={glass_temple} alt={""}></img>
            <img className={"about_me_photo"} src={berlin} alt={""}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
