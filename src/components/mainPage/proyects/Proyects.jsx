import React, { Component } from 'react';
import './Proyects.scss';
import ProyectsJSON from '../../../data/proyectsCarousel.json'

import CarouselComplex from '../../shared/carouselComplex'

export default class Proyects extends Component {
  render() {
    return (
      <section id="proyects-general-container">
        <CarouselComplex 
        isReverse={false}
        dataJSON={ProyectsJSON}
        title="PROYECTOS"
        />
      </section>
    )
  }
}
