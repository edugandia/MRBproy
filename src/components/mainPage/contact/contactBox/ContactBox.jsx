import React, { Component } from "react";
import "./ContactBox.scss";

export default class ContactBox extends Component {
  render() {
    return (
      <a href={this.props.link} target="_black" className="contact-box">
        <img src={this.props.image} alt={this.props.text} />
        <p>{this.props.text}</p>
      </a>
    );
  }
}
