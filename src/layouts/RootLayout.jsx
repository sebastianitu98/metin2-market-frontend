import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <div className='font-sans font-bold text-neutral-950 min-h-screen bg-black'>
            <header>
                <nav className='navigation flex justify-between mx-auto my-2 px-2 my-0 items-center  text-zinc-300'>
                    <NavLink to="/"><img className='w-14 mx-auto' src="https://img.m2icondb.com/72346.png" alt="LOGO" /></NavLink>
                    <NavLink to="/">PLATFORME</NavLink>
                    <NavLink to="contact">CONTACT</NavLink>
                    <NavLink to="about">INFO</NavLink>

                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout