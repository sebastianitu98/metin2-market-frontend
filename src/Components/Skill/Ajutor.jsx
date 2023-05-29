import { React, useState, useEffect } from 'react'
import { skills, secondarySkills } from '../utils/iconLinks/skillsLinks'

function Ajutor({ element, rasa, skillSet, skillPoints}) {
    
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
    <div className='text-center'>
        <img className='alchemyOrSkill'
            src={`${secondarySkills[element][skills[rasa][skillSet].ajutor][mastery]}`}
            alt={`${secondarySkills[element][skills[rasa][skillSet].ajutor].name}`}
            title={`${secondarySkills[element][skills[rasa][skillSet].ajutor].name}`} />
        <span className='block text-center'>{skillPoints}</span>
    </div>
  )
}

export default Ajutor

//secondarySkills[element][skills.data.ajutor].url

//element={'ajutor'} data={data.rasa}