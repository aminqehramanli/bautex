import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class LastSection extends Component {
  render() {
    return (
        <div class="last_section">
        <NavLink href="">Контакты</NavLink>
        <div class="contact_list">
          <h6>BauTex</h6>
          <ul>
            <p>Адрес</p>
            <li>119049, г. Москва, ул. Крымский вал, д. 3, стр. 2</li>
            <p>Телефон</p>
            <li>+7 (495) 532-91-12</li>
            <p>E-mail</p>
            <li>adesign@bautex.ru</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default LastSection
