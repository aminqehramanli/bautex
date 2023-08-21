import React, { Component } from 'react'
import img1 from "../../images/eco 1.png"
import img2 from "../../images/eco 2.jpg"
import img3 from "../../images/eco 3.png"
import img4 from "../../images/eco 4.png"
import img5 from "../../images/eco 5.png"


export class CategorySection extends Component {
  render() {
    return (
      <div class="container">
      <div class="category_section">
        <div class="grid_container">
          <div class="grid_card">
            <img src={img1} alt="#"/>
            <h2>Антивандальные</h2>
            <p>Обоям не страшны механические повреждения, в том числе и когти домашних животных</p>
          </div>
          <div class="grid_card">
            <img src={img2} alt="#"/>
            <h2>Гипоаллергенные</h2>
            <p>Обои не вызывают аллергию и сохраняют баланс влажности в помещении</p>
          </div>
          <div class="grid_card">
            <img src={img3} alt="#"/>
            <h2>Экологичные</h2>
            <p>Обои на 100% состоят из натуральных природных материалов</p>
          </div>
          <div class="grid_card">
            <img src={img4} alt="#"/>
            <h2>Защищают от трещин</h2>
            <p>Обои отлично сдерживают образование трещин на стенах и идеально подходят для новостроек</p>
          </div>
          <div class="grid_card">
            <img src={img5} alt="#"/>
            <h2>Можно мыть</h2>
            <p>Обои не только можно мыть с чистящими средствами, но и использовать их в помещениях с повышенной
              влажностью</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default CategorySection
