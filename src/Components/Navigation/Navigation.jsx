import React from 'react'
import { Link } from 'react-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className='navigation flex justify-between mx-auto my-2 px-2 my-0 items-center  text-zinc-300'>
      <a href="#"><img className='w-14 mx-auto' src="https://img.m2icondb.com/72346.png" alt="LOGO" /> MACHU PICHUU</a>
      <a href="#">PLATFORME</a>
      <a href="#">CONTACT</a>
      <a href="#">INFO</a>

    </nav>
  )
}

export default Navigation