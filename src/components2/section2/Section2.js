import React, { Component } from 'react'
import SectionHeader2 from './SectionHeader2'
import SectionButton2 from './SectionButton2'
import SectionGrid2 from './SectionGrid2'

export class Section2 extends Component {
  render() {
    return (
        <section>
        <SectionHeader2/>

        <SectionButton2/>

        <SectionGrid2/>
        </section>
    )
  }
}

export default Section2
