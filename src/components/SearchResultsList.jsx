import React from 'react'
import './SearchResultsList.css'

export default function SearchResultsList({ result }) {

 
    return (
        <div className='result-list'>
            {
                    result.map((result, ind)=>{
                        return <div className='search-result'  key={ind}  onClick={(()=>alert(`You clicked ${result.name}`))}>{result.name}</div>
                    })

                }
               
               
        </div>
    )
}
