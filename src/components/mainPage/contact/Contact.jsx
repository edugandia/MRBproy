import React, { Component } from "react";
import "./Contact.scss";
import ContactBox from "./contactBox";

export default class Contact extends Component {
  render() {
    const contactInfo = [
      {
        image: "./images/ubicacion.png",
        text: "C/ Pisuerga 33 28014 Madrid",
        link: "http://www.google.com/maps/place/pisuerga+33+madrid"
      },
      {
        image: "./images/email.png",
        text: "Escríbenos un e-mail",
        link: "mailto:hola@marben.com?Subject=Buenos%20días%20..."
      },
      {
        image: "./images/telefono.png",
        text: "Llámanos al 651 502 291",
        link: "tel:+34651502291"
      }
    ];
    return (
      <div id="contact-general-container">
        <div className="contact-container">
          <div className="contact-title">
            <h2>CONTACTO</h2>
            <p>Contacta con nosotros y recibe información sin compromiso.</p>
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
