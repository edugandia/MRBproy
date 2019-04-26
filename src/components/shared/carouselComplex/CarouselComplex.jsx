import React, { Component } from "react";
import "./CarouselComplex.scss";

export default class CarouselComplex extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.proyectSelector(this.props.dataJSON[0]);
  }

  proyectSelector = proyectSelected => {
    const lastImage = proyectSelected.images.length - 1;
    const imagesToShow = proyectSelected.images;
    this.setState({
      ...this.state,
      proyectSelected,
      lastImage,
      imagesToShow,
      imageSelected: 0
    });
  };

  imageSelectedSelector = imageSelected => {
    this.setState({ ...this.state, imageSelected });
  };

  imageSelectedNavigator = operation => {
    let imageSelected = this.state.imageSelected;
    if (operation === "add") {
      imageSelected === this.state.lastImage
        ? (imageSelected = 0)
        : imageSelected++;
    }
    if (operation === "substract") {
      imageSelected === 0
        ? (imageSelected = this.state.lastImage)
        : imageSelected--;
    }
    this.setState({ ...this.state, imageSelected });
  };

  render() {
    return (
      <div
        className={`carouselcomplex-general-container ${this.props.isReverse &&
          "reverse"}`}
      >
        <div className="carouselcomplex-container">
          <div className={`text ${this.props.isReverse && "reverse"}`}>
            <div className="title">
              <h2>{this.props.title}</h2>
            </div>
            <div className="text-proyect">
              <h3>{this.state.proyectSelected.name}</h3>
              <p>{this.state.proyectSelected.description}</p>
            </div>
          </div>
          <div className="thumbnails-carousel-container">
            {this.props.dataJSON.map((element, i) => {
              return (
                <div
                  onClick={() => this.proyectSelector(element)}
                  className={`thumbnail-image ${this.state.proyectSelected
                    .id === element.id && "border"}`}
                  key={i}
                >
                  <img src={element.thumbnailImage} alt={element.name} />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`carouselcomplex-image-container ${this.props.isReverse &&
            "reverse"}`}
        >
          <div className="navigation-controller">
            <div
              onClick={() => this.imageSelectedNavigator("substract")}
              className="button-container"
            >
              <img src="./images/arrow-left.png" alt="arrow-left" />
            </div>
            <div
              onClick={() => this.imageSelectedNavigator("add")}
              className="button-container"
            >
              <img src="./images/arrow-right.png" alt="arrow-rigth" />
            </div>
          </div>
          <div className="image-container">
            <img
              src={this.state.imagesToShow[this.state.imageSelected]}
              alt={this.state.imageSelected}
            />
          </div>
          <div className="points-controller">
            {this.state.proyectSelected.images.map((element, i) => {
              return (
                <div
                  onClick={() => this.imageSelectedSelector(i)}
                  className={`point ${this.state.imageSelected === i &&
                    "selected"}`}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
