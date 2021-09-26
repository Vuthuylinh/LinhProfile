import React from 'react'

const TechStack_Section = (props) => {
  return (
    <div className="tech_section">
      <div className="technologies proficience">
        <h2>PROFICIENT: </h2>
        <ul className="tech-ul">
          {
            props.proficient.map((tech) => (
              <button className='tech_name'>{tech}</button>
            )
            )
          }
        </ul>
      </div>
      <div className="technologies">
        <h2>FAMILIAR: </h2>
        <ul className="tech-ul">
          {
            props.familiar.map((tech) => (
              <button className='tech_name'>{tech}</button>
            )
            )
          }
        </ul>
      </div>
      <div className="technologies">
        <h2>COLLARAORATIVE TOOLS: </h2>
        <ul className="tech-ul">
          {
            props.tools.map((tech) => (
              <li>
                <button className='tech_name'>{tech}</button>
              </li>
            )
            )
          }
        </ul>
      </div>


    </div>
  )
}

export default TechStack_Section
