import { React, useEffect, useState} from 'react'
import { skills } from '../utils/iconLinks/skillsLinks'

function Skill({ rasa, skillSet, element, skillPoints }) {
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
                src={`${skills[rasa][skillSet][element][mastery]}`} 
                alt={`${skills[rasa][skillSet][element].name}`}
                title={`${skills[rasa][skillSet][element].name}`} />
            <span className='block text-center'>{skillPoints}</span>
        </div>}
        
    </div>
  )
}

export default Skill

// 1
// m7
// m10
// p