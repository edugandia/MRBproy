import React, { Component } from "react";

import NavBar from "./navBar";
import Header from "./header";
import OurServices from "./ourServices";
import AboutUs from "./aboutUs";
import Proyects from "./proyects";
import Decoration from "./decoration";
import Carrier from "./carrier";
import Counselling from "./counselling";
import Contact from "./contact";
import Footer from "./footer";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <OurServices />
        <AboutUs />
        <Proyects />
        <Decoration />
        <Carrier />
        <Counselling />
        <Contact />
        <Footer />
      </div>
    );
  }
}
