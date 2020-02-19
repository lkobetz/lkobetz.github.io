import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import berlin from "./images/berlin.jpg";
import resume from "./resume/LarissaKobetzResume_nocontact.pdf";

export default props => {
  return (
    <div>
      <NavBar />
      <div id={"aboutme"}>
        <div className={"section_container"}>
          <div id={"section"}>
            <div>
              <h3 className={"statement_font"}>Bio</h3>
              <p>
                <b>
                  I am a Software Engineer with a background in English language
                  education. While teaching, I loved finding creative ways to
                  engage students in learning new concepts. <br></br>
                  <br></br>While pursuing more automated, interactive tools to
                  bring the concepts I was teaching to life, I was inspired to
                  learn more about Technology. I wanted to learn the skills to
                  build new and engaging products myself to improve user/learner
                  experiences. <br></br>
                  <br></br>After completing the Grace Hopper bootcamp, I became
                  a Software Engineering Teaching Fellow there, combining my
                  love of teaching and coding. I’ve become more and more
                  fascinated with the possibilities Technology offers to solve
                  complex problems, and am eager to launch a career that will
                  allow me to explore the potential applications of Technology
                  to improve our world.
                </b>
              </p>{" "}
              <br></br>
              <h3 className={"statement_font"}>Hobbies</h3>
              <p>
                <b>
                  I love traveling, reading, playing games and exploring. I've
                  lived in England, Thailand, and Malaysia and have visited
                  about 20 other countries.
                </b>
              </p>{" "}
              <br></br>
              <h3 className={"statement_font"}>Skills</h3>
              <p>
                <b>
                  Proficient: JavaScript, Node.js, Express.js, React, React
                  Native, Redux, Git, Github, HTML, CSS, Sequelize <br></br>
                  Familiar: SQL, PostgreSQL, Heroku, Firebase / Firestore, Viro
                  React
                </b>
                <br />
                <br />
                <a
                  className={"link"}
                  href={resume}
                  download={"LarissaKobetzResume"}
                >
                  Download My Resume!
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={"photos"}>
          <img className={"about_me_photo"} src={berlin} alt={""}></img>
        </div>
      </div>
    </div>
  );
};
