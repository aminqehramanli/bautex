import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class MiddleSection2 extends Component {
  render() {
    return (
<div class="middle_section2">
          <div class="middle_section2inner">
            <p>
              Заполни анкету и получи в подарок экологичные обои для своего
              рабочего стола
            </p>
          </div>
          <button>
            <NavLink href="">заполнить анкету</NavLink>
          </button>
        </div>
    )
  }
}

export default MiddleSection2
