import React from "react";
import img from "./logo/logo.png";
export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        color: "rgb(94, 215, 255)",
        marginRight: "60px",
      }}
    >
      <a href="https://reactjs.org/docs/getting-started.html" target="_blank ">
        <img
          src={img}
          alt="img"
          width="50px"
          height="40px"
          style={{ marginTop: "5px" }}
        />
      </a>
      <h2 style={{ marginTop: "14px" }}>React</h2>
    </div>
  );
}
