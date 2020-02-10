import React from "react";
import axios from "axios";
import NavBar from "./NavBar";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  render() {
    return (
      <div id="contact_container">
        <NavBar />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Nixie+One"
        />
        <div className="Contact">
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Lekton"
          />
          <h3>
            If you're interested in working together, send me a message with
            your name and an email address I can reach you at. I look forward to
            hearing from you!
          </h3>
          <br />
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address: </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>{" "}
            <br />
            <div className="form-group">
              <label htmlFor="message">Message: </label>
              <textarea
                className="form-control"
                rows="5"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <br />
            <button type="submit" className="submit_button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    // create another project in express and send this to that server
    const response = await axios.post(
      "https://secret-harbor-77463.herokuapp.com/",
      this.state
    ); // localhost: http://localhost:8000, heroku: https://secret-harbor-77463.herokuapp.com/
    console.log("response.data from axios", response.data);
    if (response.data.status === "success") {
      alert(
        "Thank you! I have received your message and will get back to you shortly!"
      );
      this.resetForm();
    } else if (response.data.status === "fail") {
      alert("Your message has failed to send.");
    }
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
}

export default Contact;
