import React, { Component } from "react";
import "./ServiceBox.scss";

import scrollToId from "../../../../utils/scrollMethods";

export default class ServiceBox extends Component {
  render() {
    return (
      <div className="service-box-container">
        <img src={this.props.image} alt={this.props.title} />
        <b>{this.props.title}</b>
        <p>{this.props.description}</p>
        <div
          onClick={() => scrollToId(this.props.link)}
          className="button-link"
        >
          <h5>VER MÁS</h5>
        </div>
      </div>
    );
  }
}
