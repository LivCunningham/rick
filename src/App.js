import React, { Component } from 'react'
import Characters from './components/Characters.js'
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Characters />
      </>
    )
  }
}

export default App
