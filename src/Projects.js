import React from "react";
import "./App.css";
import Idiomatic from "./Idiomatic";

export default props => {
  return (
    <div className={"Section-header"}>
      <div className={"text"}>
        <h2>Projects</h2>
        <div className={"section"}>
          <h5>Grace In Space</h5>
          <Idiomatic />
        </div>
      </div>
    </div>
  );
};
