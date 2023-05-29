import { React, useState, useEffect } from 'react'
import { secondarySkills } from '../utils/iconLinks/skillsLinks'

function Respingere({element, skillPoints, data}) {
    
  const [mastery, setMastery] = useState('L')

    useEffect(()=>{
      if(!isNaN(Number(skillPoints))){
        setMastery('L')
      } else {
        if(skillPoints.length >2){
          setMastery(skillPoints.slice(0,1))
        } else {
          setMastery(skillPoints.slice(0,1))
        }
      } 
  },[])

  return (
    <div>
        {mastery &&
        <div className='text-center'>
            <img className='alchemyOrSkill'
                src={`${secondarySkills[element][data[element].name][mastery]}`} 
                alt={`${secondarySkills[element][data[element].name].name}`}
                title={`${secondarySkills[element][data[element].name].name}`} />
            <span className='block text-center'>{skillPoints}</span>
        </div>}
        
    </div>
  )
}

export default Respingere