import React from 'react'
// import logo from '../media/logo_name.png'
import { Link } from 'react-scroll';
export default function Navbar() {
  return (
    <nav>
      {/* <h1><a id="logo">Linh Vu</a></h1> */}

      <div>
        <a className="connect_info"
          href="https://www.linkedin.com/in/linh-vu-de/"
          arget="_blank"
          rel="noopener noreferrer"
          aria-label="visit Linh's LinkedIn page"
        >
          <img src="https://img.icons8.com/nolan/64/linkedin.png" />
          Linkedin
        </a>
      </div>
      <div>
        <a
          className="connect_info"
          href="https://github.com/Vuthuylinh"
          arget="_blank"
          rel="noopener noreferrer"
          aria-label="visit Linh's Github page"
        >
          <img src="https://img.icons8.com/nolan/50/github.png" />
          Github
        </a>
      </div>
      <div>
        <a
          className="connect_info"
          href="https://drive.google.com/file/d/1gQGRScLP7O9TmsllY3I5QvIgIHa9fzhu/view"
          arget="_blank"
          rel="noopener noreferrer"
          aria-label="visit Linh's Resume"
        >
          <img src="https://img.icons8.com/nolan/50/resume.png" />
          Resume
        </a>
      </div>
      <div>
        <a
          className="connect_info"
          href="mailto:thuylinh2490@gmail.com?subject= Hi there!"
          aria-label="send Linh an email"
        >
          <img src="https://img.icons8.com/nolan/50/email.png" />
          Email
        </a>
      </div>

    </nav>

  )
}
