import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Embed from "react-embed";
import github from "./images/github.svg";

export default props => {
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Nixie+One"
      />
      <NavBar />
      <div className={"Section-header"}>
        <div id={"projects"}>
          <div className={"single_project"}>
            <div className={"projects_title"}>
              <h3 className={"project_item"}>Grace In Space</h3>
              <a href="https://github.com/graceinspace/graceInSpace">
                <img
                  className={"github_space"}
                  src={github}
                  width={30}
                  alt={""}
                ></img>
              </a>
            </div>
            <h5 className={"project_item"}>
              Grace in Space is a virtual reality mobile game in which players
              help an elderly alien collect items that flew out of her bag while
              she was traveling through space on vacation. <br />
              <br />
              It was built with JavaScript, React Native, Redux, Viro React,
              Firebase, Firestore, and Git
              <br />
            </h5>
            <Embed
              className={"project_item"}
              url={
                "https://www.youtube.com/watch?v=Tg7BLim7ues&list=PLx0iOsdUOUmnZXS2H9EDbhYMlmh3onWHs&index=6&t=0s&fbclid=IwAR2kzuxHrUMe7-RLOt7l7hPCf-cFQ_p8tWf3wwxrgjEzDnx_NX33A5o_Fb4"
              }
            />
            <br />
            <Embed
              url={
                "https://www.youtube.com/watch?v=-HUuZn3BKrQ&feature=youtu.be"
              }
            />
          </div>
          <div className={"single_project"}>
            <div className={"projects_title"}>
              <h3 className={"project_item"}>Idiomatic</h3>
              <a href="https://github.com/lkobetz/stackathon">
                <img
                  className={"github_space"}
                  src={github}
                  width={30}
                  alt={""}
                ></img>
              </a>
            </div>
            <h5 className={"project_item"}>
              Idiomatic is a mobile app that helps English language learners
              practice their sentence structure and spelling while learning new
              idioms. <br />
              <br />
              It was built with JavaScript, React Native, Node.js, and Git
              <br />
            </h5>
            <Embed url={"https://www.youtube.com/watch?v=nNw_wC0WL-Y"} />
          </div>
        </div>
      </div>
    </div>
  );
};
