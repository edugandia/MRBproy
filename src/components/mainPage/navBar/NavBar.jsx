import React, { Component } from "react";
import "./NavBar.scss";
import scrollToId from "../../../utils/scrollMethods";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      isOnTop: true
    };
  }

  componentWillMount() {
    this.isOnTopDetecter();
  }

  isOnTopDetecter = () => {
    window.onscroll = () => {
      if (window.pageYOffset < 100) {
        this.setState({ ...this.state, isOnTop: true });
      } else {
        this.setState({ ...this.state, isOnTop: false });
      }
    };
  };

  menuToggle = () => {
    this.setState({ ...this.state, showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <nav
        className={`navBar-general-container ${this.state.isOnTop && "on-top"}`}
      >
        <img
          onClick={() => scrollToId("header-container")}
          src="./logo.png"
          alt="logo"
        />
        <div className="nav-links-container">
          <h4
            className="nav-link"
            onClick={() => scrollToId("services-general-container")}
          >
            SERVICIOS
          </h4>{" "}
          <h4
            className="nav-link"
            onClick={() => scrollToId("proyects-general-container")}
          >
            PROYECTOS
          </h4>{" "}
          <h4
            className="nav-link"
            onClick={() => scrollToId("contact-general-container")}
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
                scrollToId("services-general-container");
                this.menuToggle();
              }}
            >
              SERVICIOS
            </h4>{" "}
            <h4
              className="nav-link-mb"
              onClick={() => {
                scrollToId("proyects-general-container");
                this.menuToggle();
              }}
            >
              PROYECTOS
            </h4>{" "}
            <h4
              className="nav-link-mb"
              onClick={() => {
                scrollToId("contact-general-container");
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
