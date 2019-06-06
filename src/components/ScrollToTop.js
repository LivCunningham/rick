import { Component } from 'react'
import React, { useState, useEffect } from 'react'

class ScrollToTop extends Component {

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block"
  } else {
    document.getElementById("myBtn").style.display = "none"
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0 
}


  render() {
    return
    <button onclick="topFunction()" id="myBtn" title="Go to top">
      Top
    </button>
  }
}

export default ScrollToTop
