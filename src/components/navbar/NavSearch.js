import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faSearch,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
export default function NavSearch() {
  function handleChange(e) {
    return e.target.value;
  }
  return (
    <div>
      <ul>
        <li className="searchField">
          <FontAwesomeIcon
            style={{ color: "white", margin: "0px 10px" }}
            icon={faSearch}
          />
          <input
            id="search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </li>

        <li>
          <a href="https://reactjs.org/versions" target="_blank ">
            v17.0.2
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/languages" target="_blank ">
            <FontAwesomeIcon
              style={{ marginRight: "10px" }}
              icon={faLanguage}
            />
            Languages
          </a>
        </li>
        <li>
          <a href="https://github.com/facebook/react/" target="_blank ">
            GitHub
            <FontAwesomeIcon
              style={{ marginLeft: "10px" }}
              icon={faExternalLinkAlt}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
