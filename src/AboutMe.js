import React from "react";
import "./App.css";
import glass_temple from "./images/glass_temple.JPG";

export default props => {
  return (
    <div className={"App-header"}>
      <div className={"text"}>
        <h2>About Me</h2>
        <div className={"section"}>
          <img
            className={"about_me_photo"}
            src={glass_temple}
            alt={""}
            width={300}
            height={400}
          ></img>
          <h5>
            With a background in English language education, I loved finding
            creative ways to engage students in learning new concepts. Pursuing
            more automated, interactive tools to spice up my lessons inspired me
            to learn more about Technology. I wanted to learn the skills to
            build new and engaging products myself to improve user/learner
            experiences. After completing the Grace Hopper bootcamp, I now work
            as a Software Engineering Teaching Fellow, combining my love of
            teaching and coding. I’ve become more and more fascinated with the
            possibilities Technology offers to solve complex problems, and am
            eager to launch a career that will allow me to explore the potential
            applications of Technology to improve our world.
            <br></br>
            <br></br>
            In my free time, I love traveling and learning about the people,
            cultures, and history of the world. I've lived in England, Thailand,
            and Malaysia and have visited 20 other countries. I also love
            reading and playing games!
          </h5>
        </div>
      </div>
    </div>
  );
};
