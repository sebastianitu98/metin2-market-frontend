import React from 'react'
import "./Subcharacter.css"

function Subcharacter({ data }) {
  return (
    <div className='subCharacter flex flex-col text-center mx-2 my-2 border-4 h-full border-green-400 w-1/5 mx-auto flex items-center border-2 mx-1'>
      <h2>Lv. {data.level}</h2>
      <img className='subCharacterImage' src={`src/assets/${data.rasa}100px.png`} alt="Poza cu rasa" />
    </div>
  )
}

export default Subcharacter