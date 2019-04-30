import React, { Component } from "react";
import "./AboutUs.scss";

export default class AboutUs extends Component {
  render() {
    return (
      <section className="about-general-container">
        <div className="low-opacity-container">
          <div className="about-container">
            <h3>SOBRE NOSOTROS</h3>
            <p>
              Marben se especializa en soluciones a la medida de cada cliente.
            </p>
            <p>
              Nuestro objetivo es la satisfacción final del cliente,
              transmitiendo garantía, calidad y tranquilidad. Los cambios son el
              motor de la vida, por ello te escuchamos atentamente para crear el
              espacio que sea un reflejo de tu personalidad y que te haga feliz.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
