import React from 'react'
import Skill from '../Skill/Skill'
import Respingere from '../Skill/Respingere'
import Ajutor from '../Skill/Ajutor'
import HelperSkills from '../HelperSkills/HelperSkills'

function Skills({ data }) {
    return (
        <div className=''>
            <div className="skills flex justify-between my-2">
                <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill1'} skillPoints={data.skillsInfo['skill1']} />
                <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill2'} skillPoints={data.skillsInfo['skill2']} />
                <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill3'} skillPoints={data.skillsInfo['skill3']} />
                <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill4'} skillPoints={data.skillsInfo['skill4']} />
                <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill5'} skillPoints={data.skillsInfo['skill5']} />
                <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill6'} skillPoints={data.skillsInfo['skill6']} />
            </div>
            <div className="secondarySkills flex justify-around my-2">
                <Skill className='alchemyOrSkill' rasa={data.rasa} skillSet={data.skills} element={'skill7'} skillPoints={data.skillsInfo['skill7']} />
                <Respingere className='alchemyOrSkill' element={'respingere'} skillPoints={data.skillsInfo['respingere'].points} data={data.skillsInfo} />
                <Ajutor className='alchemyOrSkill' element={'ajutor'} skillPoints={data.skillsInfo['ajutor']} skillSet={data.skills} rasa={data.rasa} />
            </div>
            {/* HELPERS */}
            <HelperSkills data={data} />

        </div>
    )
}

export default Skills