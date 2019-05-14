import React, { Component } from "react";
import "./ContactBox.scss";

export default class ContactBox extends Component {
  render() {
    return (
      <div>
        {this.props.canOpenModal ? (
          <div onClick={this.props.isModalOpenHandler} className="contact-box">
            <img src={this.props.image} alt={this.props.text} />
            <p>{this.props.text}</p>
          </div>
        ) : (
          <a href={this.props.link} target="_black" className="contact-box">
            <img src={this.props.image} alt={this.props.text} />
            <p>{this.props.text}</p>
          </a>
        )}
      </div>
    );
  }
}
