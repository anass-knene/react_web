import React from "react";
import "./sectionFlex.scss";
export default function SectionFlex(props) {
  return (
    <div className="divSection">
      <div className="sectionProp">
        <h2>{props.title}</h2>
        <p>{props.para1}</p>
        <p>{props.para2}</p>
      </div>
    </div>
  );
}
