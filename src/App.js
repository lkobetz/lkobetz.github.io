import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import profile_photo from "./images/profile_photo copy.JPG";
import linkedin from "./images/linkedin2.svg";
import github from "./images/github.svg";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Nixie+One"
      />
      <header className="App-header">
        <img
          className={"profile_photo"}
          src={profile_photo}
          alt={""}
          width={350}
        ></img>
        <div className={"text"}>
          <h3>Hi! I'm Larissa, a full stack software developer.</h3>
          <div className={"all_pages"}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className={"pages"}>About Me</h5>
            </Link>{" "}
            <h5>|</h5>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className={"pages"}>Projects</h5>
            </Link>{" "}
            <h5>|</h5>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className={"pages"}>Contact</h5>
            </Link>
          </div>
          <div id={"logos"}>
            <a href="https://www.linkedin.com/in/larissa-kobetz/">
              <img
                className={"logo"}
                id={"linkedin"}
                src={linkedin}
                alt={""}
              ></img>
            </a>
            <a href="https://github.com/lkobetz">
              <img
                className={"logo"}
                id={"github"}
                src={github}
                alt={""}
                width={50}
              ></img>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
