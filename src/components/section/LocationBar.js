import React, { Component } from 'react'

export class LocationBar extends Component {
  render() {
    return (
        <div class="container">
        <div class="location_bar">
          <h5>Где нас можно купить</h5>
          <div class="location_section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.9758662363315!2d40.385350789801265!3d56.12472068554079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414c7962425f4363%3A0x4c6810bac2c2e948!2sDvoryanskaya%20St%2C%20Vladimir%2C%20Vladimirskaya%20oblast&#39;%2C%20Rusya!5e0!3m2!1str!2saz!4v1691240150290!5m2!1str!2saz"
              style={{ height: "550px", width: "1450px", border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade"}}>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default LocationBar

