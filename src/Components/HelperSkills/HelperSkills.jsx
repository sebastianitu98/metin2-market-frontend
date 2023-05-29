import React from 'react'
import HelperSkill from '../HelperSkill/HelperSkill'

function HelperSkills({ data }) {
    return (
        <div className="helpers flex justify-between">
            <HelperSkill className='alchemyOrSkill' data={data.permanentHelpers} element={'conducere'} />
            <HelperSkill className='alchemyOrSkill' data={data.permanentHelpers} element={'inspiratie'} />
            <HelperSkill className='alchemyOrSkill' data={data.permanentHelpers} element={'carisma'} />
            <HelperSkill className='alchemyOrSkill' data={data.permanentHelpers} element={'polymorph'} />
            <HelperSkill className='alchemyOrSkill' data={data.permanentHelpers} element={'precizie'} />
            <HelperSkill className='alchemyOrSkill' data={data.permanentHelpers} element={'horseLevel'} />
        </div>
    )
}

export default HelperSkills