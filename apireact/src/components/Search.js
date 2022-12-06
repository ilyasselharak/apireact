import React from 'react'
import "../styles/search.css"
import { useState } from 'react'
import axios from 'axios'

function Search({fun}) {
  const [query,setQuery]=useState('')
  const handleChange=(e)=>{
   setQuery(e.target.value)
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res=>{
      fun(res.data.results)
    })
    .catch(err=>{console.log(err)})
  }
  return (
    <form onSubmit={handlesubmit} className='search-container'>
        <input onChange={handleChange} type="text" placeholder='search for you carton'/>
        <button>submit</button>
    </form>
  )
}

export default Search