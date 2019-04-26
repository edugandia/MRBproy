import React, { Component } from 'react';
import './Decoration.scss';

import DecorationJSON from '../../../data/decorationCarousel.json'

import CarouselComplex from '../../shared/carouselComplex'

export default class Decoration extends Component {
  render() {
    return (
      <section id="decoration-general-container">
      <CarouselComplex 
      isReverse={true}
      dataJSON={DecorationJSON}
      title="DECORACIÓN"
      />
    </section>
    )
  }
}
