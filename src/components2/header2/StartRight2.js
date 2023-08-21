import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class StartRight2 extends Component {
  render() {
    return (
        <div class="startright">
        <nav class="main_nav">
            <ul>
                <li><NavLink href="#">Коллекции <svg class="svgpolygon" width="11" height="10" viewBox="0 0 11 10"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.50424 9.05228L0.803816 0.757957L10.3371 0.834432L5.50424 9.05228Z"
                                fill="#4A614D" />
                        </svg>
                    </NavLink></li>
                <li><NavLink href="#">Где купить</NavLink></li>
                <li><NavLink href="#">О нас<svg class="svgpolygon2" width="11" height="10" viewBox="0 0 11 10"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.50424 9.05228L0.803816 0.757957L10.3371 0.834432L5.50424 9.05228Z"
                                fill="#4A614D" />
                        </svg>
                    </NavLink></li>
                <li><NavLink href="#">Полезное<svg class="svgpolygon2" width="11" height="10" viewBox="0 0 11 10"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.50424 9.05228L0.803816 0.757957L10.3371 0.834432L5.50424 9.05228Z"
                                fill="#4A614D" />
                        </svg>
                    </NavLink></li>
                <li><NavLink href="#">Для партнеров</NavLink></li>
                <li class="phone_number">+7 (495) 532-91-12</li>
            </ul>
        </nav>
    </div>
    )
  }
}

export default StartRight2
