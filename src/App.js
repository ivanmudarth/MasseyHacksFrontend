import "./App.css";
import React, { Component } from "react";
import "./App.css";
import icon from "./takeAction.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: " ",
      message: " ",
      link: " ",
    };
  }
  componentDidMount() {
    /*
    console.log("hello");
    var searchUrl = "";

    // eslint-disable no-undef 
    chrome.tabs.getSelected(null, function (tab) {
      myFunction(tab.url);
    });

    function myFunction(tablink) {
      console.log("inside myFunction");
      searchUrl =
        "http://6f521fbf2526.ngrok.io/api/recommendation?url=" + tablink;
    }

    console.log("outside " + searchUrl);

    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ link });
      });
      */
  }

  render() {
    return (
      <div className="modalBody">
        <div className="row">
          <div className="left">
            <img className="icon" src={icon} />
          </div>
          ;
          <div className="right">
            <p className="titleText">
              <b>Take Action: &nbsp;</b>
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
