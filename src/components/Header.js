import React, { Component } from 'react'
import one from '../images/header.png'

class Header extends Component {
  render() {
    return (
      <>
        <div>
          <section className="title">
            <h1>Rick&Morty</h1>
            <h3>LET'S.GET.SCHWIFTY.</h3>
          </section>
        </div>
        <img className="one" src={one} alt="" />
      </>
    )
  }
}

export default Header
