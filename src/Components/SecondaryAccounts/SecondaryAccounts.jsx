import React from 'react'
import SecondaryAccount from '../SecondaryAccount/SecondaryAccount'
import NoSecondaryAccount from '../SecondaryAccount/NoSecondaryAccount'

function SecondaryAccounts({ data }) {
    return (
        <>
            <div className="secondaryAccounts w-full text-center h-full">
                <p className='mx-auto'>CONTURI SECUNDARE</p>
                {data.secondaryAccounts &&
                    data.secondaryAccountsList.map((el, index) => <SecondaryAccount data={el} key={index} />)

                }
                {data.secondaryAccounts && data.secondaryAccountsList.length == 0 && <><NoSecondaryAccount /> <NoSecondaryAccount /> <NoSecondaryAccount /></>}
                {data.secondaryAccounts && data.secondaryAccountsList.length == 1 && <><NoSecondaryAccount /> <NoSecondaryAccount /> </>}
                {data.secondaryAccounts && data.secondaryAccountsList.length == 2 && <><NoSecondaryAccount /></>}
            </div>
        </>
    )
}

export default SecondaryAccounts