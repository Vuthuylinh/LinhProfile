import React from 'react'
import TechStack_Section from './TechStack_section'
import tech from '../../media/tech.png'
import technologiesList from './Technologies_List'
const proficient = technologiesList.proficient;
const colaborative_tools = technologiesList.colaborative_tools;
const familiar = technologiesList.familiar;
export default function TechStack() {
  return (
   <section className="tech_section">
      <h1>TECHNOLOGIES</h1>
     <div id='techStack'>
      <TechStack_Section proficient={proficient} familiar={familiar}  tools={colaborative_tools} />
      <img id="techPicture" src={tech} />
    </div>
   </section>

  )
}
