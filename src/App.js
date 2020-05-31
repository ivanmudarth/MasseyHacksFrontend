import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    organization: "relief fund",
    message: "donate to the following charity",
    link: "",
  };
  componentDidMount() {
    console.log("hello");
    var searchUrl = "";

    /* eslint-disable no-undef */
    chrome.tabs.getSelected(null, function (tab) {
      myFunction(tab.url);
    });

    function myFunction(tablink) {
      console.warn(tablink);
      searchUrl =
        "http://6f521fbf2526.ngrok.io/api/recommendation?url=" + tablink;
      console.log(tablink);
    }

    console.log({ SEARCHFILTER: searchUrl });

    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ link });
      });
    return (
      <div className="modalBody">
        <div className="row">
          <div className="right">
            <p className="titleText">
              Take Actiovvvvvvvvvvv
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
