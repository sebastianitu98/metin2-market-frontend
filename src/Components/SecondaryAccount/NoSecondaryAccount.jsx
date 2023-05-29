import React from 'react'
import './SecondaryAccount.css'


function NoSecondaryAccount() {
    return (
        <div className='noSecondaryAccount my-2 border-4 border-red-800 w-full mx-auto h-1/3 flex items-center border-2 '>
            <img class='w-1/6 mx-auto' src="src\assets\no.png" alt="LIPSA CONT" />
        </div>
    )
}

export default NoSecondaryAccount