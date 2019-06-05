import React, { Component } from 'react'
import one from '../images/download.png'

class Header extends Component {
  render() {
    return (
      <div>
        <section className="title">
          <h1>Rick&Morty</h1>
          <h3>LET'S.GET.SCHWIFTY.</h3>
          <img className="one" src={one} alt="" />
        </section>
      </div>
    )
  }
}

export default Header
