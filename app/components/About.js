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
      <div class="intro">
      <article class="typewriter">
          <h1>Hi there! I'm Linh Vu</h1>
        </article>
        <h1>
          <a
            href=""
            class="typewrite"
            data-period="2000"
            data-type='[ "I am a Software Developer", "I was a Banker", "I love to travel", "I love flowers" ]'
          >
            <span class="wrap"></span>
          </a>
        </h1>
      </div>


    </section>

  )
}
