import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
<div>
        <p>www.bautexdesign.ru</p>
        <img src="./images/лого_дизайн 1 (1).png" alt=""/>
        <NavLink href="https://www.instagram.com/"><img src="./images/инст 1 (2).png" alt="#"/>
      </NavLink>
</div>
    )
  }
}

export default Footer
