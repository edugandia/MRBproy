import React, { Component } from "react";
import "./Carrier.scss";
import CarrierJSON from "../../../data/carrierCarousel.json";

import CarouselComplex from "../../shared/carouselComplex";

export default class Carrier extends Component {
  render() {
    return (
      <section id="carrier-general-container">
        <CarouselComplex
          isReverse={true}
          dataJSON={CarrierJSON}
          title="MANTENIMIENTO"
        />
      </section>
    );
  }
}
