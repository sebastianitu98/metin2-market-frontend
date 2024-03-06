import './PlatformDetails.css'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { peturi } from '../../Components/utils/iconLinks/peturi'
import { costumAura } from '../../Components/utils/iconLinks/costumAura'
import { elementeBiolog } from '../../Components/utils/iconLinks/biologLinks'
import { inventory } from '../../Components/utils/iconLinks/inventory'
import { money } from '../../Components/utils/iconLinks/money'
import Alchemy from '../../Components/Alchemy/Alchemy'
import Skills from '../../Components/Skills/Skills'
import SubCharacters from '../../Components/SubCharacters/SubCharacters'
import SecondaryAccounts from '../../Components/SecondaryAccounts/SecondaryAccounts'
import MeleyAccounts from '../../Components/MeleyAccounts/MeleyAccounts'
import Amulets from '../../Components/Amulets/Amulets'


function PlatformDetails() {

    const navigate = useNavigate()


    const { id } = useParams()

    const [data, setData] = useState()

    useEffect(() => {
        //get data from the server (get all platforms)

        const getData = async () => {
            const response = await fetch(`http://127.0.0.1:3000/${id}`)
            const json = await response.json()
            if (response.ok) {
                setData(json)
            }
        }

        getData()
    }, [])

    return (
        <div className='platformDetails flex flex-col mx-auto bg-gray-800 p-6 my-3 z-2'>
            <button className='mb-2 text-white max-w-fit detailsReadMore' onClick={() => { navigate(-1) }}> MERGI INAPOI</button>
            {data && <div className="upperContent">


                {/* ------------------------------------------------------------------------ */}
                {/* ----------------------------    FIRST COLUMN    ------------------------ */}
                {/* ------------------------------------------------------------------------ */}
                <div className="firstColumn flex flex-col px-2 text-center">
                    <div className="serverLevel flex flex-col justify-center">
                        {data && <h2 className='w-full' title='Server'>{data.server.toUpperCase()}</h2>}
                        {data && !data.levelChamp && <h2>Level: <span className='text-neutral-950'>{data.level}</span></h2>}
                        {data && data.levelChamp && <h2>Level: <span className='colorLevelChamp'>{data.levelChampion}</span></h2>}
                    </div>

                    <div className="rasaImagineDiv mx-auto flex justify-center">
                        <img className='rasaImage mx-auto' src={`${data.rasa}.png`} alt="Img containing race" />
                    </div>
                    <div className="biologAuraCostume flex flex-col justify-center">
                        {/* BIOLOG */}
                        {data.biolog && data.biolog != 'terminat' ?
                            <div className='mx-auto flex items-center'>
                                <img className='alchemyOrSkill mx-4'
                                    src={elementeBiolog[data.biolog].url}
                                    alt={`${elementeBiolog[data.biolog].name}`}
                                    title={`${elementeBiolog[data.biolog].name}`} />
                                <h2>{data.biologDuse}/{elementeBiolog[data.biolog].maxPieces}</h2>
                            </div>
                            :
                            <div className='mx-auto flex items-center'>
                                <img className='alchemyOrSkill mx-2'
                                    src={elementeBiolog['bijIntelepciune'].url}
                                    alt={`${elementeBiolog['bijIntelepciune'].name}`}
                                    title={`${elementeBiolog['bijIntelepciune'].name}`}
                                />
                                <img className='yesOrNo'
                                    src='yes.png'
                                    alt={`BIOLOG TERMINAT`}
                                    title={`BIOLOG TERMINAT`}
                                />
                            </div>
                            // <div className="mx-auto flex items-center">
                            //     <img className='alchemyOrSkill mx-4'
                            //         src={elementeBiolog['dinteOrk'].url}
                            //         alt={`${elementeBiolog['dinteOrk'].name}`}
                            //         title={`${elementeBiolog['dinteOrk'].name}`} />
                            //     <h2> 0 / {elementeBiolog['dinteOrk'].maxPieces} </h2>
                            // </div>
                        }

                        {/* COSTUM AURA */}
                        {data.auraCostume ?
                            <div className='flex my-2 mx-auto flex justify-between w-3/4 items-center'>
                                <img className='alchemyOrSkill' src={costumAura} alt="Detine costum aura" />
                                <img className='yesOrNo' src="yes.png" alt="DA" />
                            </div> :
                            <div className="flex my-2 mx-auto flex justify-between w-3/4 items-center">
                                <img className='alchemyOrSkill' src={costumAura} alt="Nu detine costum aura" />
                                <img className='yesOrNo' src="no.png" alt="NU" />
                            </div>}
                    </div>

                    <div className="petInventory flex flex-col jusitfy-center">
                        {/* PET */}
                        {!data.pet ?
                            <div className='mx-auto my-2 w-full'>
                                <div className='mx-auto my-2 flex justify-between  w-3/4 items-center'>
                                    <img className='alchemyOrSkill' src={`${peturi.khan.url}`} alt="No pet" title='Khan / Porcusor' />
                                    <img className='yesOrNo' src="no.png" alt="NU" />
                                </div>
                                <span className=''>0 z</span>
                            </div> :
                            <div className='mx-auto my-2 w-full'>
                                <div className='mx-auto my-2 flex justify-between w-3/4 items-center'>
                                    <img className='alchemyOrSkill' src={`${peturi.khan.url}`} alt="Yes pet" title='Khan / Porcusor' />
                                    <img className='yesOrNo' src="yes.png" alt="DA" />
                                </div>
                                <span className=''>{data.petDays} z</span>
                            </div>
                        }

                        {/* INVENTARE DEBLOCATE */}
                        <div className="unlockedInventory flex flex-col justify-center text-center my-3 items-center">
                            <img className='mx-2' src={`${inventory.url}`} alt={`${inventory.name}`} title={`${inventory.name}`} />
                            <h5>{data.unlockedInventories} / 18</h5>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                {/* ----------------------------    SECOND COLUMN    ----------------------- */}
                {/* ------------------------------------------------------------------------ */}

                <div className="secondColumn flex flex-col justify-around mx-auto w-96 min-h-full">


                    {/* ALCHIMIE */}
                    <Alchemy data={data} />

                    {/* SKILLURI */}
                    <Skills data={data} />

                    {/* SUBCARACTERE */}
                    <SubCharacters data={data} />

                </div>


                {/* ------------------------------------------------------------------------ */}
                {/* ----------------------------    THIRD COLUMN    ------------------------ */}
                {/* ------------------------------------------------------------------------ */}

                <div className="thirdColumn flex flex-col justify-between mx-auto">
                    {/* CONTURI SECUNDARE */}
                    <SecondaryAccounts data={data} />


                    <div className="extra">
                        {/* CONTURI MELEY */}
                        <MeleyAccounts data={data} />

                        {/* AMULETE */}
                        {/* <Amulets data={data} /> */}

                    </div>
                </div>
            </div>

            }
            {/* ------------------------------------------------------------------------------ */}
            {/* ---------------------------------   FOOTER   --------------------------------- */}
            {/* ------------------------------------------------------------------------------ */}

            {data &&
                <div className="downContent flex justify-between border-t-2 border-black gap-0 my-3" >
                    <div className="descriereIdContact">
                        <div className="detailsDescription my-2">
                            <p>DESCRIERE: </p>
                            {data.description && data.description}
                        </div>
                        <br />
                        <p>ID platforma: <span className='text-red-700'>{data._id}</span></p>
                        <br />
                        <span>DISCORD: {data.contact}</span>
                    </div>

                    <div className="price flex items-center my-2">
                        <div className="priceInWons flex flex-col items-center mx-4 mb-2 border-2 p-4">
                            <img src={money.yang.url} alt={money.yang.name} title='Woni' />
                            <span>{data.priceW} W</span>
                        </div>
                        <div className="priceInCurrency flex flex-col items-center mx-4 mb-2 border-2 p-4">
                            <img src={money.cash.url} alt={money.cash.name} title='RON' />
                            <span>{data.priceRON} RON</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PlatformDetails