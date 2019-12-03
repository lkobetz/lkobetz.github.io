import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
// import PropTypes from "prop-types";
import App from "./App";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

export default class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={withRouter(App)} />
        <Route exact path="/about" component={withRouter(AboutMe)} />
        <Route exact path="/contact" component={withRouter(Contact)} />
        <Route exact path="/projects" component={withRouter(Projects)} />
      </Switch>
    );
  }
}
