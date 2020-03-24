import React from "react";
import NavBar from "./NavBar";
import Embed from "react-embed";
import github from "./images/github.svg";
import goblins from "./images/giddygoblins.png";
import stocks from "./images/stock_portfolio.png";

export default props => {
  return (
    <div>
      <NavBar />
      <div className={"Section_header"}>
        <div id={"projects"}>
          <div className={"single_project"}>
            <div className={"projects_text"}>
              <h4 className={"project_item"}>
                Idiomatic
                <a href="https://github.com/lkobetz/stackathon">
                  <img
                    className={"github_space"}
                    src={github}
                    width={30}
                    alt={""}
                  ></img>
                </a>
              </h4>
              <h5 className={"project_description"}>
                Idiomatic is a mobile app that helps English language learners
                practice their sentence structure and spelling while learning
                new idioms. <br />
                <br />
                It was built with Node.js, JavaScript, React Native, React
                Native Navigation, Redux, and Git
                <br />
              </h5>
            </div>
            <div className={"demos"}>
              <Embed url={"https://www.youtube.com/watch?v=nNw_wC0WL-Y"} />
            </div>
          </div>
          <div className={"single_project"}>
            <div className={"projects_text"}>
              <h4 className={"project_item"}>
                Stock Portfolio
                <a href="https://github.com/lkobetz/TTPProject">
                  <img
                    className={"github_space"}
                    src={github}
                    width={30}
                    alt={""}
                  ></img>
                </a>
              </h4>
              <h5 className={"project_description"}>
                A mock stock portfolio app in which users can buy stocks, view
                the activity of the stocks they've purchased, and view a list of
                all of their transactions. <br />
                <br />
                It was built with Node.js, JavaScript, Express.js, Sequelize,
                React, IEX Cloud API, and Git
                <br />
                <br />
                <a
                  className={"link"}
                  href={"https://larissa-ttp-project.herokuapp.com/#/"}
                >
                  Go to the site!
                </a>
              </h5>
            </div>
            <div className={"demos"}>
              <img src={stocks} alt={""} width={"100%"}></img>
            </div>
          </div>
          <div className={"single_project"}>
            <div className={"projects_text"}>
              <h4 className={"project_item"}>
                Grace In Space
                <a href="https://github.com/graceinspace/graceInSpace">
                  <img
                    className={"github_space"}
                    src={github}
                    width={30}
                    alt={""}
                  ></img>
                </a>
              </h4>
              <h5 className={"project_description"}>
                Grace in Space is a virtual reality mobile game in which players
                help an elderly alien collect items that flew out of her bag
                while she was traveling through space on vacation. <br />
                <br />
                It was built with Node.js, JavaScript, React Native, Redux, Viro
                React, Firebase, Firestore, and Git
                <br />
              </h5>
            </div>
            <div className={"demos"}>
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
          </div>
          <div className={"single_project"}>
            <div className={"projects_text"}>
              <h4 className={"project_item"}>
                Grace's Giddy Goblins
                <a href="https://github.com/graces-giddy-goblins/grace_shopper">
                  <img
                    className={"github_space"}
                    src={github}
                    width={30}
                    alt={""}
                  ></img>
                </a>
              </h4>
              <h5 className={"project_description"}>
                Grace's Giddy Goblins is an e-commerce website run by five
                goblins who used to be traveling salesgoblins, but took their
                business online when their route became too difficult to
                optimize. Browse their website for some magical wares you won't
                find anywhere else... <br />
                <br />
                It was built with Node.js, JavaScript, Express.js, Sequelize,
                PostgreSQL, Heroku, React, Redux, and Git
                <br />
                <br />
                <a
                  className={"link"}
                  href={"https://giddygoblins.herokuapp.com/"}
                >
                  Go to the site!
                </a>
              </h5>
            </div>
            <div className={"demos"}>
              <img src={goblins} alt={""} width={"100%"}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
