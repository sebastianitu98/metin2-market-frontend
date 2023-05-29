import React from 'react'
import Subcharacter from '../Subcharacter/Subcharacter'
import NoSubCharacter from '../Subcharacter/NoSubCharacter'

function SubCharacters({ data }) {
    return (
        <div className='subCharactersElement flex flex-col justify-between w-full'>
            <h5 className='mx-auto my-1'>SUBCARACTERE</h5>
            <div className="subCharacters flex w-full">
                {data.subCharacters && data.subCharactersList.map((el, index) => <Subcharacter data={el} key={index} />)}
                {data.subCharacters && data.subCharactersList.length == 1 && <><NoSubCharacter /> <NoSubCharacter /><NoSubCharacter /> </>}
                {data.subCharacters && data.subCharactersList.length == 2 && <><NoSubCharacter /><NoSubCharacter /></>}
                {data.subCharacters && data.subCharactersList.length == 3 && <><NoSubCharacter /></>}
                {data.subCharacters && data.subCharactersList.length == 0 && <><NoSubCharacter /> <NoSubCharacter /> <NoSubCharacter /><NoSubCharacter /></>}

            </div>
        </div>
    )
}

export default SubCharacters