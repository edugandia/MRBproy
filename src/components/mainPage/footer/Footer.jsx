import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-general-container">
        <h6>© 2018 Marben Solutions S.L.</h6>
        <h5>
          <Link to="aviso-legal">AVISO LEGAL Y POLÍTICA DE PRIVACIDAD</Link>
        </h5>
      </footer>
    );
  }
}
