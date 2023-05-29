import React from 'react'
import Skill from '../Skill/Skill'
import "./SecondaryAccount.css"
import Alchemy from '../Alchemy/Alchemy'

function SecondaryAccount({ data }) {
  return (
    <div className='secondaryAccount flex justify-between items-center my-2 border-4 border-green-400'>

      <div className="secondaryAccountDetails text-center mx-2">
        <h3>Lv.{data.level}</h3>
        <img className='secondaryAccountImage' src={`src/assets/${data.rasa}100px.png`} alt={`${data.rasa}`} title={`${data.rasa}`} />
      </div>

      <div className="secondaryAccountSkillsAndAlchemy w-full flex flex-col mx-auto">
        <div className="secondaryAccountSkills flex justify-around">
          <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill1'} skillPoints={data.skillsInfo['skill1']} />
          <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill2'} skillPoints={data.skillsInfo['skill2']} />
          <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill3'} skillPoints={data.skillsInfo['skill3']} />
        </div>

        <Alchemy data={data} />
      </div>

    </div>
  )
}

export default SecondaryAccount