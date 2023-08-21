import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import img7 from "../../images/лого_дизайн 1 (1).png"
import img8 from "../../images/инст 1.svg"

export class Footer extends Component {
  render() {
    return (
<footer>
        <p>www.bautexdesign.ru</p>
        <img src={img7} alt=""/>
        <NavLink href="https://www.instagram.com/"><img src={img8} alt="#"/>
      </NavLink>
      </footer>
    )
  }
}

export default Footer
