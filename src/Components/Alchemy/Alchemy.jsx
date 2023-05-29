import React from 'react'
import AlchemyPiece from '../AlchemyPiece/AlchemyPiece'
import { AlchemyContextProvider } from '../../Contexts/AlchemyContext'

function Alchemy({ data }) {
  return (
    <AlchemyContextProvider>
      <div className="alchemy flex justify-between">
        <AlchemyPiece className='alchemyOrSkill' data={data.alchemy.ruby} element={'ruby'} alchemyElements={data.alchemy} />
        <AlchemyPiece className='alchemyOrSkill' data={data.alchemy.diamond} element={'diamond'} alchemyElements={data.alchemy} />
        <AlchemyPiece className='alchemyOrSkill' data={data.alchemy.onyx} element={'onyx'} alchemyElements={data.alchemy} />
        <AlchemyPiece className='alchemyOrSkill' data={data.alchemy.granate} element={'granate'} alchemyElements={data.alchemy} />
        <AlchemyPiece className='alchemyOrSkill' data={data.alchemy.saphire} element={'saphire'} alchemyElements={data.alchemy} />
        <AlchemyPiece className='alchemyOrSkill' data={data.alchemy.jade} element={'jade'} alchemyElements={data.alchemy} />
      </div>
    </AlchemyContextProvider>
  )
}

export default Alchemy