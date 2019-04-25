import React, { Component } from "react";
import "./CounsellingBox.scss";

export default class CounsellingBox extends Component {
  render() {
    return (
      <div className="counselling-box-container">
        <img src={this.props.image} alt={this.props.title} />
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
