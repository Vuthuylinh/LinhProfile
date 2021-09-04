import React from 'react'
import logo from '../media/logo2.png'
export default function About() {
  return (
    <div>
      <img src={logo}/>
      <section class="about-me">
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
              src=".../media/logo2.png"
              alt="Linh's picture"
            />
          </div>
          <div class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="50" width="200" />
              <div class="text">LINH VU</div>
            </svg>
          </div>
        </div>
      </section>
    </div>

  )
}
