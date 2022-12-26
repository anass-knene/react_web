import React, { Component } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.scss";

export default class Button extends Component {
  render() {
    return (
      <div className="buttonDiv">
        <div className="getStartDiv">
          <a
            className="GetStarted"
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank "
          >
            Get Started
          </a>
          <a
            className="tutorial"
            href="https://reactjs.org/tutorial/tutorial.html"
            target="_blank "
          >
            Take the Tutorial
            <FontAwesomeIcon
              style={{ marginLeft: "15px", fontSize: "1rem" }}
              icon={faChevronRight}
            />
          </a>
        </div>
      </div>
    );
  }
}
