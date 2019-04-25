import React, { Component } from "react";
import "./Counselling.scss";

import CounsellingBox from "./counsellingBox";

export default class Counselling extends Component {
  render() {
    const counsellingData = [
      {
        image: "./images/disenamos-icon.png",
        title: "DISEÑAMOS A TU GUSTO",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, animi expedita? Deserunt at animi sit ab facilis cum, architecto, iste libero dicta excepturi aliquid! Amet quaerat doloremque reiciendis magnam iure?"
      },
      {
        image: "./images/hablamos-icon.png",
        title: "HABLAMOS CONTIGO",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, animi expedita? Deserunt at animi sit ab facilis cum, architecto, iste libero dicta excepturi aliquid! Amet quaerat doloremque reiciendis magnam iure?"
      },
      {
        image: "./images/guiamos-icon.png",
        title: "TE GUIAMOS",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, animi expedita? Deserunt at animi sit ab facilis cum, architecto, iste libero dicta excepturi aliquid! Amet quaerat doloremque reiciendis magnam iure?"
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
                  image={service.img}
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
