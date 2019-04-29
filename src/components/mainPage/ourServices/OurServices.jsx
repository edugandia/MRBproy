import React, { Component } from "react";
import "./OurServices.scss";

import ServiceBox from "./serviceBox";

export default class OurServices extends Component {
  render() {
    const services = [
      {
        image: "./images/proyectos.png",
        title: "Proyectos",
        description: "Creamos proyectos a tu medida.",
        link: "proyects-general-container"
      },
      {
        image: "./images/decoramos.png",
        title: "Decoramos",
        description: "Decoramos siguiendo las últimas tendencias",
        link: "decoration-general-container"
      },
      {
        image: "./images/portes.png",
        title: "Portes",
        description: "Transportamos tus cosas a tu nuevo hogar",
        link: "carrier-general-container"
      }
    ];
    return (
      <section id="services-general-container">
        <div className="services-container">
          <div className="services-title">
            <h2>NUESTROS SERVICIOS</h2>
            <h3>
              NUESTROS
              <br />
              SERVICIOS
            </h3>
          </div>
          <div className="services-box-container">
            {services.map((service, i) => {
              return (
                <ServiceBox
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
