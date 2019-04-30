import React, { Component } from "react";
import "./Contact.scss";
import ContactBox from "./contactBox";

export default class Contact extends Component {
  render() {
    const contactInfo = [
      {
        image: "./images/ubicacion.png",
        text: "C/ Ramón Gómez de la Serna 19 28035",
        link: "http://www.google.com/maps/place/pisuerga+33+madrid"
      },
      {
        image: "./images/email.png",
        text: "Escríbenos un e-mail",
        link: "mailto:proyectos@marbensolution.com?Subject=Buenos%20días%20..."
      },
      {
        image: "./images/telefono.png",
        text: "Llámanos al 657 529 663",
        link: "tel:+34657529663"
      }
    ];
    return (
      <div id="contact-general-container">
        <div className="contact-container">
          <div className="contact-title">
            <h2>CONTACTO</h2>
            <p>
              Si tienes alguna duda, contacta con nosotros e intentaremos
              ayudarte para que todas ellas se disipen.
            </p>
          </div>
          <div className="contact-box-container">
            {contactInfo.map((element, i) => {
              return (
                <ContactBox
                  image={element.image}
                  text={element.text}
                  link={element.link}
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
