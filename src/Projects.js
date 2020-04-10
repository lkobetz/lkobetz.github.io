import React from "react";
import NavBar from "./NavBar";
import Embed from "react-embed";
import github from "./images/github.svg";
import goblins from "./images/giddygoblins.png";
import stocks from "./images/stock_portfolio.png";

export default (props) => {
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
                <h5>
                  Biggest Challenges:
                  <ul>
                    <li>
                      Problem: Incorporate a timer that starts over when a new
                      idiom loads
                    </li>
                    <li>
                      Solution: Use React's componentDidUpdate lifecycle method
                      in the Timer component to 'listen' for parent component's
                      state changes (such as 'timeUp' or 'started') that
                      indicate whether the timer should restart.
                    </li>
                    <br />
                    <li>
                      Problem: Due to the asynchronous nature of React's
                      'setState' method, 'Hint' button doesn't finish clearing
                      the current solution before displaying the hint, resulting
                      in duplicate letters in solution, which frequently causes
                      a domino effect of errors.
                    </li>
                    <li>
                      Solution: Use promises to chain 'clear' and 'displayHint'
                      function calls
                    </li>
                  </ul>
                </h5>
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
                <h5>
                  Biggest Challenges:
                  <ul>
                    <li>
                      Problem: Prevent users from viewing any data besides their
                      own.
                    </li>
                    <li>
                      Solution: Use express-sessions to create a session for a
                      user and Sequelize store to save the session data in a
                      database (thus preventing memory leaks.) Only serve up
                      data of the user currently logged into the session,
                      regardless of the URL or client-side data in localStorage.
                    </li>
                    <br />
                    <li>
                      Problem: Parent and sibling React components need to
                      automatically rerender when user buys a new stock.
                    </li>
                    <li>
                      Solution: Click handler on 'submit' button calls a
                      function bound to its parent component, which resets its
                      state (causing it to re-render) and passes it down to its
                      other child, which re-renders when it receives it.
                    </li>
                  </ul>
                </h5>
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
                <h5>
                  Biggest Challenges:
                  <ul>
                    <li>
                      Problem: Viro React is incompatible with React Native
                      Navigation, making it impossible to navigate from a
                      'static' screen to a VR screen.
                    </li>
                    <li>
                      Solution: Pressing 'play' triggers a state change in the
                      Redux store that conditionally renders the VR screen
                      instead of the welcome screen.
                    </li>
                    <br />
                    <li>
                      Problem: Save each of the user's scores (seconds taken to
                      complete game) in a database.
                    </li>
                    <li>
                      Solution: Score is updated in Redux with every timer
                      re-render (ie every second). When the user wins the game,
                      a function is triggered that adds the most recent score
                      from the Redux store into user's 'scores' array in the
                      Firestore database. Storing the user's scores in an array
                      in a NoSQL database makes it simple to display them on the
                      user's profile.
                    </li>
                  </ul>
                </h5>
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
