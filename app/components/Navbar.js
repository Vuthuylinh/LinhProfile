import React from 'react'
import logo from '../media/logo2.png'
export default function Navbar() {
  return (
    <nav>
      <img src={logo} />
      <ul>
        <li>Home</li>
        <li>About Linh</li>
        <li>Projects</li>
        <li>Technologies</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </nav>

  )
}
