import React from 'react'
import linhPhoto from '../media/profilePictureLinh.png'
export default function About() {
  return (
    <section id="about-me">
      <div class="intro">
        <article class="typewriter">
          <h1>Hi there! I'm Linh Vu</h1>
        </article>
        <h1>
          <a
            href=""
            class="typewrite"
            data-period="2000"
            data-type='[ "I am a plants mom", "I was a banker", "Love to travel", "I Love to Develop." ]'
          >
            <span class="wrap"></span>
          </a>
        </h1>
      </div>
      <div class="profile-wrapper">
        <div class="profile">
          <img
            id="profile-image"
            src={linhPhoto}
            alt="Linh's picture"
          />
        </div>
        <div className="svg-wrapper">
          <svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="350" className="shape" height="50" width="200" />
            <text x="30" y="385" fill="#e02932" className="text" >LINH VU</text>
          </svg>
        </div>
      </div>

    </section>

  )
}
