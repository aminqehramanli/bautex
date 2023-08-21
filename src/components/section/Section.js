import React, { Component } from "react";
import HeaderSection from "./HeaderSection";
import CategorySection from "./CategorySection";
import MiddleSection from "./MiddleSection";
import CategorySection2 from "./CategorySection2";
import MiddleSection2 from "./MiddleSection2";
import LocationBar from "./LocationBar";
import FlexContainer from "./FlexContainer";
import LastSection from "./LastSection";


export class Section extends Component {
  render() {
    return (
<>
        <HeaderSection />

        <CategorySection />

        <MiddleSection />

        <CategorySection2 />

        <MiddleSection2/>

        <LocationBar/>

        <FlexContainer/>

        <LastSection/>
</>
    );
  }
}

export default Section;
