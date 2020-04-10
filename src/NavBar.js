import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }
  componentDidMount() {
    let page = window.location.href.toString();
    page = page.slice(page.indexOf("#") + 2);
    this.setState({ url: page });
  }
  render() {
    return (
      <nav id="navbar">
        <Link
          params={"home"}
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5 className={"nav_link"}>Home</h5>
        </Link>
        <Link
          params={"about"}
          to="/about"
          style={{
            textDecoration: "none",
            color: this.state.url === "about" ? "#6600ff" : "black",
          }}
        >
          <h5 className={this.state.url === "about" ? null : "nav_link"}>
            About Me
          </h5>
        </Link>{" "}
        <Link
          params={"projects"}
          to="/projects"
          style={{
            textDecoration: "none",
            color: this.state.url === "projects" ? "#6600ff" : "black",
          }}
        >
          <h5 className={this.state.url === "projects" ? null : "nav_link"}>
            Projects
          </h5>
        </Link>
        <Link
          params={"contact"}
          to="/contact"
          style={{
            textDecoration: "none",
            color: this.state.url === "contact" ? "#6600ff" : "black",
          }}
        >
          <h5 className={this.state.url === "contact" ? null : "nav_link"}>
            Contact
          </h5>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
