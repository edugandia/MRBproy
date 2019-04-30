import React, { Component } from "react";
import "./Counselling.scss";

import CounsellingBox from "./counsellingBox";

export default class Counselling extends Component {
  render() {
    const counsellingData = [
      {
        image: "./images/diseñamos.png",
        title: "DISEÑAMOS A TU GUSTO",
        description:
          "Tu casa es el lugar donde pasas más horas a lo largo de tu vida, por eso tu estilo propio y tus necesidades son lo único que nos importa."
      },
      {
        image: "./images/hablamos.png",
        title: "HABLAMOS CONTIGO",
        description:
          "Aquí estamos para ayudarte en cualquier necesidad que tengas en tu hogar."
      },
      {
        image: "./images/guiamos.png",
        title: "TE GUIAMOS",
        description:
          "Nuestros profesionales están a tu disposición para convertir tu casa en tu hogar."
      }
    ];
    return (
      <section className="counselling-general-container">
        <div className="counselling-container">
          <div className="counselling-title">
            <h2>TE ASESORAMOS</h2>
          </div>
          <div className="counselling-box-container">
            {counsellingData.map((service, i) => {
              return (
                <CounsellingBox
                  image={service.image}
                  title={service.title}
                  description={service.description}
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
