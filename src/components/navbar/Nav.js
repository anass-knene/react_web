import React from "react";
import "./styles.scss";

export default function Nav() {
  return (
    <div>
      <ul style={{ color: "red" }}>
        <li>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank "
          >
            Doc
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank ">
            Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html"
            target="_blank "
          >
            Blog
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/community/support.html" target="_blank ">
            Community
          </a>
        </li>
      </ul>
    </div>
  );
}
