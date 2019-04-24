import React, { Component } from "react";
import "./Header.scss";

import CarouselAuto from "../../shared/carouselAuto";

export default class Header extends Component {
  render() {
    return (
      <header id="header-container">
        <CarouselAuto
        secondsOfInterval={5} />
      </header>
    );
  }
}
