import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header.js'
import { Link } from 'react-router-dom'

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
      <Header />
      <ul className="characters-list">
        {chars.map(index => {
          return (
            <li key={index}>
              <p>{index.name}</p>
              <Link to={`/SingleCharacters/${index.id}`}>
                <img className="images" src={index.image} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
