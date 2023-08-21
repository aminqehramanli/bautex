import React, { Component } from "react";

export class FlexContainer extends Component {
  state = {
    contRef: React.createRef(),
    sliderPage: 0,
  };

  slider(count) {
    for (let i = 0; i < this.state.contRef.current.children.length; i++) {
      this.state.contRef.current.children[i].style.transform = `translateX(-${
        count * 435
      }px)`;
    }
  }

  sliderBtn(type, e) {
    let page = this.state.sliderPage;
    if (type === "right") {
      if (page < this.state.contRef.current.children.length - 3) {
        page++;
      } else {
        page = 0;
      }
    } else {
      if (page > 0) {
        page--;
      }
    }
    this.setState({ sliderPage: page });
    this.slider(page);
  }

  render() {
    const { contRef } = this.state;
    return (
      <div class="container">
        <div class="sliderCont">
          <div class="sliderBtn">
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={this.sliderBtn.bind(this, "left")}
            >
              <path d="M0 15L25.5 0.277569V29.7224L0 15Z" fill="#4A614D" />
            </svg>
          </div>

          <div ref={contRef} class="sliderCards">
            <div class="sliderCard">
              <p>
                Покупала обои для детской комнаты, подошли идеально. Дочке очень
                понравились бабочки, поэтому взяли Singapore. В небесном цвете
                они смотрятся просто божественно! 1
              </p>
            </div>
            <div class="sliderCard">
              <p>
              Переехали с мужем в новостройку, очень хотели просто гладкие окрашенные стены. Пошли в салон покупать
            краску, и нам там посоветовали, чтобы потом трещин на стенах не было, т.к. дом новый и будет еще
            усаживаться, купить обои под покраску. Остановились на пигментированном холсте. Это полный восторг! Ни разу
            не пожалели!
              </p>
            </div>
            <div class="sliderCard">
              <p>
              Сначала очень скептически относилась к обоям под покраску, тем более тканным. Изучила массу информации,
            перелопатила кучу отзывов и поняла в итоге, что это то, что мне нужно! Остановилась именно на BauTex Design,
            потому что очень уж понравилась фактура Tokyo. Покрасила ее в пудровый - смотрится очень эффектно.
              </p>
            </div>
            <div class="sliderCard">
              <p>
                Покупала обои для детской комнаты, подошли идеально. Дочке очень
                понравились бабочки, поэтому взяли Singapore. В небесном цвете
                они смотрятся просто божественно! 4
              </p>
            </div>
            <div class="sliderCard">
              <p>
                Покупала обои для детской комнаты, подошли идеально. Дочке очень
                понравились бабочки, поэтому взяли Singapore. В небесном цвете
                они смотрятся просто божественно! 5
              </p>
            </div>
            <div class="sliderCard">
              <p>
                Покупала обои для детской комнаты, подошли идеально. Дочке очень
                понравились бабочки, поэтому взяли Singapore. В небесном цвете
                они смотрятся просто божественно! 6
              </p>
            </div>
          </div>

          <div class="sliderBtn2">
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={this.sliderBtn.bind(this, "right")}
            >
              <path d="M26 15L0.5 29.7224L0.5 0.277568L26 15Z" fill="#4A614D" />
            </svg>
          </div>
        </div>
        <div class="flex_containerbutton">
          <button>оставь свой отзыв</button>
        </div>
      </div>
    );
  }
}

export default FlexContainer;
