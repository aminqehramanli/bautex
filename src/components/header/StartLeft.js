import React, { Component } from 'react'
import img from '../../images/лого_дизайн 1.png'
export class StartLeft extends Component {
  render() {
    return (
        <div class="startleft">
        <img src={img} alt="none" />
        <p>Жаккардовые обои из кварцевой нити под покраску</p>
      </div>
    )
  }
}

export default StartLeft
