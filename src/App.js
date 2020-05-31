import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    organization: "relief fund",
    message: "donate to the following charity",
    link: "link to charity",
  };
  render() {
    return (
      <div className="modalBody">
        <div className="row">
          <div className="right">
            <p className="titleText">
              Take Action:{" "}
              <a className="titleLink" href={this.state.link} target="_blank">
                {this.state.organization}
              </a>
            </p>
            <p className="genText">{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
