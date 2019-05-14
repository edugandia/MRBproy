import React, { Component } from "react";
import "./ModalForm.scss";
import ContactForm from "./contactForm";

export default class ModalForm extends Component {
  render() {
    return (
      <div
        className={`modal-form-container ${this.props.isModalOpen &&
          "show-modal"}`}
      >
        <ContactForm isModalOpenHandler={this.props.isModalOpenHandler} />
      </div>
    );
  }
}
