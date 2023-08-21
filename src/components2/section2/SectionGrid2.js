import React, { Component } from "react";
import img16 from "../../bautexhtml2/images2/Снимок экрана 2021-03-04 в 17.58 1.jpg"

export class SectionGrid2 extends Component {
  render() {
    return (
      <div class="grid_container2">
        <div class="grid_card2">
          <img src={img16} alt="#" />
        </div>
        <div class="grid_card2">
          <img src={img16} alt="#" />
        </div>
        <div class="grid_card2">
          <img src={img16} alt="#" />
        </div>
      </div>
    );
  }
}

export default SectionGrid2;
