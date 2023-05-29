import React from 'react'
import './AlchemyPiece.css'
import { alchemy } from '../utils/iconLinks/alchemyLinks'
import alchemyValues from '../utils/alchemyValues/alchemyValues'
import { useAlchemyContext } from '../../Contexts/AlchemyContext'

function AlchemyPiece({ data, element, alchemyElements }) {

  const { alchemyState, dispatch } = useAlchemyContext()
  const handleVisibility = () => { dispatch({ type: `${element}` }) }

  return (
    <div className='relative alchemyPiece'>
      {data.class ?
        <img className='alchemyOrSkill' src={alchemy[element][data.class][data.clarity]} alt="Piesa alchimie" title={`${element}`} onClick={handleVisibility} /> :
        <img className='alchemyOrSkill opacity-20' src={alchemy[element]['mitic']['excelent']} alt="Piesa alchimie" title={`${element}`} onClick={handleVisibility} />
      }
      <div className={alchemyState[`${element}Visible`] ? "alchemyBonuses absolute left-2/4 mx-auto text-center visible" : 'alchemyBonuses absolute left-2/4 mx-auto text-center hidden'}>

        {/* DISPLAY LA BONUSURI */}
        {alchemyElements[element].bonuses && Object.values(alchemyElements[element].bonuses).map((key) => key != '' ? <p key={key}>{alchemyValues[element][key].name + alchemyValues[element][key][data.class][data.clarity]}  </p> : '')}

        {/* DACA NU ARE BONUSURI */}
        {alchemyElements[element].bonuses && alchemyElements[element].class != '' && JSON.stringify(Object.values(alchemyElements[element].bonuses)) == JSON.stringify(['', '', '']) && <p>Fara bonusuri</p>}

        {/* DACA NU ARE PIESA DE ALCHIMIE */}
        {alchemyElements[element].bonuses && alchemyElements[element].class == '' && <p> Fara {alchemy[element].name}</p>}
      </div>
    </div>
  )
}

export default AlchemyPiece