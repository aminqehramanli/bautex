import React, { Component } from 'react'
import img6 from "../../images/3 1.jpg"

export class CategorySection2 extends Component {
  render() {
    return (
        <div class="container">
        <div class="category_section2">
  
          <div class="colorcards">
            <img src={img6} alt="#"/>
          </div>
  
          <div class="grid_container2">
            <div class="grid_card2">
              <div class="grid_card2inner">
                <h4>Коллекция</h4>
                <p>BASIC</p>
              </div>
            </div>
            <div class="grid_card2">
              <div class="grid_card2inner">
                <h4>Коллекция</h4>
                <p>LOFT</p>
              </div>
            </div>
            <div class="grid_card2">
              <div class="grid_card2inner">
                <h4>Коллекция</h4>
                <p>GEOMETRY</p>
              </div>
            </div>
            <div class="grid_card2">
              <div class="grid_card2inner">
                <h4>Коллекция</h4>
                <p>MINIMALISM</p>
              </div>
            </div>
            <div class="grid_card2">
              <div class="grid_card2inner">
                <h4>Коллекция</h4>
                <p>CLASSIC</p>
              </div>
            </div>
            <div class="grid_card2">
              <div class="grid_card2inner">
                <h4>Коллекция</h4>
                <p>KIDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategorySection2
