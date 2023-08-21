import React, { Component } from 'react'
import StartLeft2 from './StartLeft2'
import StartRight2 from './StartRight2'

export class Start2 extends Component {
  render() {
    return (
        <div class="container">
        <div class="start">
            <StartLeft2/>
            <StartRight2/>
        </div>
        </div>
    )
  }
}

export default Start2
