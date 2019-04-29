import React, { Component } from "react";
import "./ContactBox.scss";

export default class ContactBox extends Component {
  render() {
    return (
      <div className="contact-box">
        <img src={this.props.image} alt={this.props.text} />
        <a href={this.props.link} target="_black">
          {this.props.text}
        </a>
      </div>
    );
  }
}
