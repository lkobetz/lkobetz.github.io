import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
// import profile_photo from "./images/profile_photo copy.JPG";
import linkedin from "./images/linkedin2.svg";
import github from "./images/github.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: ""
    };
  }
  // aborted attempt at animating with react
  // componentDidMount() {
  //   this.startTyping();
  // }
  // startTyping() {
  //   const text = "Hi! I'm Larissa, a full stack software developer.";
  //   let counter = 0;
  //   setInterval(() => {
  //     while (counter < text.length) {
  //       console.log(text[counter]);
  //     }
  //   }, 1000);
  //   counter++;
  // }

  render() {
    return (
      <div className="App">
        <header className="App_header">
          {/* <img
          className={"profile_photo"}
          src={profile_photo}
          alt={""}
          width={350}
        ></img> */}
          <div className={"text"}>
            <h1 id={"typewriter"}>
              Hi! I'm Larissa, a full stack software developer.
            </h1>
            <div className={"all_pages"}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3 className={"pages"}>About Me</h3>
              </Link>{" "}
              <h3>|</h3>
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3 className={"pages"}>Projects</h3>
              </Link>{" "}
              <h3>|</h3>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3 className={"pages"}>Contact</h3>
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
}

export default App;
