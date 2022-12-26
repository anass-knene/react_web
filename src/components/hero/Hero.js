import React from "react";
import heroImg from "../hero/heroBackground/background.png";
import Button from "../Button/Button";
import "./hero.scss";
export default function Hero() {
  return (
    <div className="heroDiv">
      <div>
        <img className="heroImg" src={heroImg} alt="img" />
      </div>
      <div className="reactDiv">
        <div>
          <h1>React</h1>
          <h2>A JavaScript library for building user interfaces</h2>
        </div>
        <Button />
      </div>
    </div>
  );
}
