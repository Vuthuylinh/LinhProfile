import React from 'react'
import logo from '../media/logo2.png'
import { Link } from 'react-scroll';
export default function Navbar() {
  return (
    <nav >
      {/* <img src={logo} /> */}
      <ul className='navbar'>
        <li>
          <a href="#about-me" className="link-section">About</a>
        </li>
        <li>
        <a href="#all_projects" className="link-section">Project</a>
         </li>
        <li>
         <a href="#techStack" className="link-section">Technologies</a>
        </li>
        <li>
        <a href="#all_experiences" className="link-section">Experience</a></li>
        <li>
          <a href="#" className="link-section">Contact</a>
          </li>
      </ul>
    </nav>

  )
}
