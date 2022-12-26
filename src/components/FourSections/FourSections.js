import React from "react";
import "./FourSections.scss";

import { LiveProvider, LiveEditor, LivePreview } from "react-live";

export default class FourSections extends React.Component {
  render() {
    return (
      <div className="liveEditorBox">
        <div className="textBox">
          <h2>{this.props.BigHeader}</h2>
          <p>{this.props.para1}</p>
          <h3>{this.props.paraHeader}</h3>
          <p>{this.props.para2}</p>
        </div>

        <div className="editorMainDiv">
          <LiveProvider code={this.props.code}>
            <div className="jsxEditor">
              <h3>
                LIVE JSX EDITOR
                <input
                  style={{ marginLeft: "160px", marginRight: "10px" }}
                  type="checkbox"
                  id="check"
                  name="js"
                />
                <label>jsx</label>
              </h3>

              <div className="provider">
                <LiveEditor className="editor" />
              </div>
            </div>
            <div className="resultDiv">
              <h3>RESULT</h3>
              <LivePreview className="preview" />
            </div>
          </LiveProvider>
        </div>
      </div>
    );
  }
}
