import React from 'react'

const TechStack_Section = (props) => {
  return (
    <div className="tech_section">
      <ul className="tech-ul">
        {
          props.technologies.map((tech) => (
            <button>{tech}</button>
             )
          )
        }
      </ul>
      <ul className="tech-ul">
        {
          props.tools.map((tech) => (
            <li>
            <button>{tech}</button>
            </li>
             )
          )
        }
      </ul>

    </div>
  )
}

export default TechStack_Section
