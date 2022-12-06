import React from 'react'
import Search from './Search'

function HomePage({character,fun}) {
  return (
    <div className='home'>
        <Search fun={fun}/>
        <h1>Main Characters</h1>
        <div className='characters-container'>
          <div className='grid'>
            {
             character.map((item)=>{
              const url="detail/"+item.id
              return <div className='grid-item'>
                <img alt="img" src={item.image}/>
                <p>{item.name}</p>
                <a href={url}><button>see details</button></a>
                </div>
             })
            }
            
          </div>
        </div>
    </div>
  )
}

export default HomePage