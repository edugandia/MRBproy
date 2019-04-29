import React, { Component } from "react";
import "./NavBarLink.scss";
import scrollToId from "../../../../utils/scrollMethods";

export default class NavBarLink extends Component {
  render() {
    return (
      <div>
        <h4
          className="nav-link"
          onClick={() => {
            scrollToId(this.props.link);
            this.props.menuToggle && this.props.menuToggle();
          }}
        >
          {this.props.text}
        </h4>
      </div>
    );
  }
}
