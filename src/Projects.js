import React from "react";
import "./App.css";
import Embed from "react-embed";

export default props => {
  return (
    <div className={"Section-header"}>
      <div className={"text"}>
        <h2>Projects</h2>
        <div className={"section"}>
          <h5>Grace In Space</h5>
          <Embed
            url={
              "https://www.youtube.com/watch?v=Tg7BLim7ues&list=PLx0iOsdUOUmnZXS2H9EDbhYMlmh3onWHs&index=6&t=0s&fbclid=IwAR2kzuxHrUMe7-RLOt7l7hPCf-cFQ_p8tWf3wwxrgjEzDnx_NX33A5o_Fb4"
            }
          />
          <Embed
            url={"https://www.youtube.com/watch?v=-HUuZn3BKrQ&feature=youtu.be"}
          />
          <h5>Idiomatic</h5>
          <Embed url={"https://youtu.be/nNw_wC0WL-Y"} />
        </div>
      </div>
    </div>
  );
};
