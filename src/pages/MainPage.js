import React, { Component } from "react";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import Footer from "../components/footer/Footer";



export class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
          <Section />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
