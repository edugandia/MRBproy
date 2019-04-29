import React, { Component } from "react";
import "./NavBar.scss";
import scrollToId from "../../../utils/scrollMethods";
import NavBarLink from "./navBarLink";

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
    const navbarInfo = [
      { text: "SERVICIOS", link: "services-general-container" },
      { text: "PROYECTOS", link: "proyects-general-container" },
      { text: "CONTACTO", link: "contact-general-container" }
    ];
    return (
      <nav
        className={`navBar-general-container ${this.state.isOnTop && "on-top"}`}
      >
        <div className="navBar-container">
          <img
            onClick={() => scrollToId("header-container")}
            src="./images/logo.png"
            alt="logo"
          />
          <div className="nav-links-container">
            {navbarInfo.map((element, i) => {
              return (
                <NavBarLink text={element.text} link={element.link} key={i} />
              );
            })}
          </div>
          <div className="menu-mb">
            <img onClick={this.menuToggle} src="./images/menu.png" alt="menu" />
          </div>
        </div>
        {this.state.showMenu && (
          <div className="dropdown-menu fade-in-top">
            {navbarInfo.map((element, i) => {
              return (
                <div className="nav-link-mb">
                  <NavBarLink
                    text={element.text}
                    link={element.link}
                    menuToggle={this.menuToggle}
                    key={i}
                  />
                </div>
              );
            })}
          </div>
        )}
      </nav>
    );
  }
}
