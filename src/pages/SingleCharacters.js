import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default function SingleCharacters(props) {
  const [person, setPerson] = useState({})

  useEffect(() => {
    let personID = props.match.params.personID
    axios
      .get(`https://rickandmortyapi.com/api/character/${personID}`)
      .then(resp => {
        console.log({ resp })
        setPerson(resp.data.results)
      })
  }, '')

  return <>charcacters</>
}
