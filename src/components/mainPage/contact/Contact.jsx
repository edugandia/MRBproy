import React, { Component } from "react";
import "./Contact.scss";
import ContactBox from "./contactBox";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  isModalOpenHandler = () => {
    this.setState({ ...this.state, isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const contactInfo = [
      {
        image: "./images/ubicacion.png",
        text: "C/ Ramón Gómez de la Serna 19 28035",
        canOpenModal: false,
        link: "http://www.google.com/maps/place/pisuerga+33+madrid"
      },
      {
        image: "./images/email.png",
        text: "Contacta con nosotros",
        canOpenModal: true,
        link: ""
      },
      {
        image: "./images/telefono.png",
        text: "Llámanos al 657 529 663",
        canOpenModal: false,
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
                  canOpenModal={element.canOpenModal}
                  isModalOpenHandler={this.isModalOpenHandler}
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
