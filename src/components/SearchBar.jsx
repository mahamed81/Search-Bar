import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'
export default function SearchBar({setResult}) {
    const [input, setInput]= useState('')

    const handleFetch = (value)=>{
        fetch('http://jsonplaceholder.typicode.com/users').
        then((response)=> response.json()).
        then((json)=> {
            const result = json.filter((user)=>{
                return value && user && user.name && user.name.toLowerCase().includes(value)
            })
            console.log(result)
            setResult(result)
        })
    }
    const inputHandle = (value)=>{
        setInput(value)
        handleFetch(value)
    }

  return (
    <div className='input-wrapper'>
        <FaSearch id="search-icon"/>
        <input placeholder='Type to search....' value ={input}onChange={(e)=>inputHandle
        (e.target.value)} />
    </div>
  )
}
