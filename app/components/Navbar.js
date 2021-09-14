import React from 'react'
import logo from '../media/logo2.png'
export default function Navbar() {
  return (
    <nav >
      {/* <img src={logo} /> */}
      <ul className='navbar'>
        <li>About </li>
        <li>Projects</li>
        <li>Technologies</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </nav>

  )
}
