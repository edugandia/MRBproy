import React, { Component } from "react";
import "./CarouselAuto.scss";

import ListOfProyects from "../../../data/headerCarousel.json";

export default class CarouselAuto extends Component {
  constructor() {
    super();
    this.state = {
      position: 0,
      lastPosition: ListOfProyects.length - 1
    };
  }

  componentDidMount() {
    this.timer();
  }

  timer = () => {
    let milisecondsInterval = this.props.secondsOfInterval * 1000;
    setTimeout(() => {
      this.changePosition("add");
      this.timer();
    }, milisecondsInterval);
  };

  changePosition = operation => {
    let position = this.state.position;
    if (operation === "add") {
      position === this.state.lastPosition ? (position = 0) : position++;
    }
    if (operation === "substract") {
      position === 0 ? (position = this.state.lastPosition) : position--;
    }
    this.setState({ ...this.state, position });
  };

  selectPosition = position => {
    this.setState({ ...this.state, position });
  };

  render() {
    return (
      <div className="carouselAuto-general-container">
        <div className="carousel-controller">
          <div className="button-container">
            <img
              onClick={() => this.changePosition("substract")}
              src="./images/arrow-left.png"
              alt="left-arrow"
            />
          </div>
          <div className="button-container">
            <img
              onClick={() => this.changePosition("add")}
              src="./images/arrow-right.png"
              alt="rigth-arrow"
            />
          </div>
        </div>
        <div className="image-container">
          <img
            src={ListOfProyects[this.state.position].image}
            alt={`img-${this.state.position}`}
          />
        </div>
        <div className="points-controller">
          {ListOfProyects.map((proy, i) => {
            return (
              <div
                onClick={() => this.selectPosition(i)}
                className={`point ${this.state.position === i && "selected"}`}
                key={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
