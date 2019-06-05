import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Characters() {
  const [chars, setChars] = useState([])

  //this will be my character's list fetch:
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(resp => {
      console.log({ resp })
      setChars(resp.data.results)
    })
  }, '')

  return (
    <>
      <ul className="characters-list">
        {chars.map(characters => {
          return (
            <li>
              <p>{characters.name}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
