import React, { Component } from "react";
import Header2 from "../components2/header2/Header2";
import Section2 from "../components2/section2/Section2";
import Footer from "../components2/footer2/Footer";

export class SecondPage extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <Section2 />
        <Footer />
      </div>
    );
  }
}

export default SecondPage;
