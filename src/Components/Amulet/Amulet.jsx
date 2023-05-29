import React from 'react'
import { amulets } from '../utils/iconLinks/amuletsLinks'

function Amulet({data}) {
  return (
    <div className='flex flex-col items-center mx-3'>
      <img className='alchemyOrSkill my-2'
        src={`${amulets[data.name].url}`}
        alt={`${amulets[data.name].name}`}
        title={`${amulets[data.name].name}`}/>
      <h3>{data.time}</h3>
    </div>
  )
}

export default Amulet