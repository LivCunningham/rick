import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Characters() {
  const [chars, setChars] = useState()
  //this will be my character's list fetch:
  axios.get(`https://rickandmortyapi.com/api/character/`).then(res => {
    const results = res.data
    console.log({ results })
  })

  return (
    <>
      <div />
    </>
  )
}
