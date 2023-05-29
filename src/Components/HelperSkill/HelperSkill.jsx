import { React, useState, useEffect } from 'react'
import { helpers } from '../utils/iconLinks/helperSkills'

function HelperSkill( {element, data} ) {

    const [skillPoints, setSkillPoints] = useState('')
    useEffect(()=> {
        setSkillPoints(data[element])
    }, [])
    


  return (
    <div className='text-center'>
        <img className='alchemyOrSkill'
            src={`${helpers[element].url}`}
            alt={`${helpers[element].name}`}
            title={`${helpers[element].name}`} />
        <span className='block text-center'>{skillPoints}</span>
    </div>
  )
}

export default HelperSkill