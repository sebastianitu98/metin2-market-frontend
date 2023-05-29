import React from 'react'
import { meley } from '../utils/iconLinks/meleyChest'

function MeleyAccounts({ data }) {
    return (
        <>
            {data.meleyAccounts && data.meleyAccountsNumber > 0 ?
                <div className="meleyContainer flex justify-between items-center my-5 border-4 border-green-400 mx-auto">
                    <img className='mx-2' src={`${meley.url}`} alt={`${meley.name}`} />
                    <p>{data.meleyAccountsNumber} x CONTURI MELEY</p>
                    <img className='mx-2' src={`${meley.url}`} alt={`${meley.name}`} />
                </div>
                :
                <div className="meleyContainer flex justify-between items-center my-5 border-4 border-red-800 mx-auto">
                    <img className='mx-2' src={`${meley.url}`} alt={`${meley.name}`} />
                    <p className='mx-auto'> FARA CONTURI MELEY </p>
                    <img className='mx-2' src={`${meley.url}`} alt={`${meley.name}`} />
                </div>
            }
        </>
    )
}

export default MeleyAccounts