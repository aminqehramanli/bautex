import React, { Component } from 'react'

export class FlexContainer extends Component {
  render() {
    return (
        <div class="container">
        <div class="flex_container">
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 15L25.5 0.277569V29.7224L0 15Z" fill="#4A614D" />
          </svg>
          <div class="flex_card">
            <p>
              Покупала обои для детской комнаты, подошли идеально. Дочке очень
              понравились бабочки, поэтому взяли Singapore. В небесном цвете
              они смотрятся просто божественно!
            </p>
          </div>
          <div class="flex_card">
            <p>
              Переехали с мужем в новостройку, очень хотели просто гладкие
              окрашенные стены. Пошли в салон покупать краску, и нам там
              посоветовали, чтобы потом трещин на стенах не было, т.к. дом
              новый и будет еще усаживаться, купить обои под покраску.
              Остановились на пигментированном холсте. Это полный восторг! Ни
              разу не пожалели!
            </p>
          </div>
          <div class="flex_card">
            <p>
              Сначала очень скептически относилась к обоям под покраску, тем
              более тканным. Изучила массу информации, перелопатила кучу
              отзывов и поняла в итоге, что это то, что мне нужно!
              Остановилась именно на BauTex Design, потому что очень уж
              понравилась фактура Tokyo. Покрасила ее в пудровый - смотрится
              очень эффектно.
            </p>
          </div>
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26 15L0.5 29.7224L0.5 0.277568L26 15Z" fill="#4A614D" />
          </svg>
        </div>
        <div class="flex_containerbutton">
          <button>оставь свой отзыв</button>
        </div>
      </div>
    )
  }
}

export default FlexContainer
