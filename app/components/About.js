import React from 'react'
import cover from '../media/cover.png'

export default function About() {
  return (
    <section id="about-me">
      <img
        id="profile-image"
        src={cover}
        alt="Linh's picture"
      />
      <div className="intro">
        <div className="css-typing">
        <p>
         Welcome to my website!
        </p>
        <p>
        My name is Linh,
        </p>
        <p>
        I am a fullstack software developer
        </p>
        <p>
          I am proud to be a Grace Hopper Scholar 2021
        </p>
        </div>
      </div>

    </section>

  )
}
