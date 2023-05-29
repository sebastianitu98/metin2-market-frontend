import './Amulet.css'
import React from 'react'
import Amulet from '../Amulet/Amulet'

function Amulets({ data }) {
    return (
        <>
            {data.amulets && data.amuletsArray.length == 0 &&

                <div className="amulets text-center my-4">
                    <p>AMULETE PE DISTRIBUIE</p>
                    <div className='my-2 border-4 border-red-800 w-full mx-auto h-1/3 flex items-center border-2'>
                        <img class='w-1/12 mx-auto' src="src\assets\no.png" alt="LIPSA CONT" />
                    </div>
                </div>

            }
            {data.amuletsArray.length != 0 &&

                <div className="amulets text-center my-4">
                    <p>AMULETE PE DISTRIBUIE</p>
                    <div className="flex max-w-xs overflow-scroll">
                        {data.amulets && data.amuletsArray.map((el, index) => <Amulet key={index} data={el} />)}
                    </div>
                </div>
            }
        </>
    )
}

export default Amulets