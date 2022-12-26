import React, { Component } from "react";
import "./Footer.scss";
import footerImg from "./FooterImg/footer.png";

export default class Footer extends Component {
  // footerList = () => {

  // }
  render() {
    return (
      <div className="footer">
        <div className="FooterDiv">
          <div class="wrapper">
            <div class="box a">
              <img src={footerImg} alt="img" width="150px" />
            </div>
            <div class="box b">
              <ul>
                <p> Doc</p>
                <li>
                  <a href={this.props.src} target="_blank ">
                    {this.props.listName}
                  </a>
                </li>
                <li>
                  <a href={this.props.src} target="_blank ">
                    {this.props.listName}
                  </a>
                </li>
                <li>
                  <a href={this.props.src} target="_blank ">
                    {this.props.listName}
                  </a>
                </li>
                <li>
                  <a href={this.props.src} target="_blank ">
                    {this.props.listName}
                  </a>
                </li>
                <li>
                  <a href={this.props.src} target="_blank ">
                    {this.props.listName}
                  </a>
                </li>
                <li>
                  <a href={this.props.src} target="_blank ">
                    {this.props.listName}
                  </a>
                </li>
                <li>
                  <a href={this.props.src} target="_blank ">
                    {this.props.listName}
                  </a>
                </li>
                <li>
                  <a href={this.props.src} target="_blank ">
                    {this.props.listName}
                  </a>
                </li>
              </ul>
            </div>
            <div class="box c">C</div>
            <div class="box d">
              <p>Copyright © 2021 Facebook Inc.</p>
            </div>
            <div class="box e">E</div>
            <div class="box f">F</div>
          </div>
        </div>
      </div>
    );
  }
}
