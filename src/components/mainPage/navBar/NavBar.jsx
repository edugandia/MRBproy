import React, { Component } from "react";
import "./NavBar.scss";
import scrollToId from "../../../utils/scrollMethods";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
  }

  menuToggle = () => {
    this.setState({ ...this.state, showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <nav className="navBar-general-container">
        <img
          onClick={() => scrollToId("header-general-container", true)}
          src="./logo.png"
          alt="logo"
        />
        <div className="nav-links-container">
          <h4
            className="nav-link"
            onClick={() => scrollToId("proyects-general-container", true)}
          >
            PROYECTOS
          </h4>{" "}
          <h4
            className="nav-link"
            onClick={() => scrollToId("services-general-container", true)}
          >
            SERVICIOS
          </h4>{" "}
          <h4
            className="nav-link"
            onClick={() => scrollToId("contact-general-container", true)}
          >
            CONTACTO
          </h4>
        </div>
        <div className="menu-mb">
          <img onClick={this.menuToggle} src="menu.png" alt="menu" />
        </div>
        {this.state.showMenu && (
          <div className="dropdown-menu">
            <h4
              className="nav-link-mb"
              onClick={() => {
                scrollToId("proyects-general-container", true);
                this.menuToggle();
              }}
            >
              PROYECTOS
            </h4>{" "}
            <h4
              className="nav-link-mb"
              onClick={() => {
                scrollToId("services-general-container", true);
                this.menuToggle();
              }}
            >
              SERVICIOS
            </h4>{" "}
            <h4
              className="nav-link-mb"
              onClick={() => {
                scrollToId("contact-general-container", true);
                this.menuToggle();
              }}
            >
              CONTACTO
            </h4>
          </div>
        )}
      </nav>
    );
  }
}
