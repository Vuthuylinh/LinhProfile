import React from 'react'
import TechStack_Section from './TechStack_section'
import linhCali from '../../media/cali.jpg'
import technologiesList from './Technologies_List'
const proficient = technologiesList.proficient;
const colaborative_tools = technologiesList.colaborative_tools;
const familiar = technologiesList.familiar;
export default function TechStack() {
  return (
    <div id='techStack'>
      <TechStack_Section proficient={proficient} familiar={familiar}  tools={colaborative_tools} />
      {/* <img id="techPicture" src={linhCali} /> */}
    </div>
  )
}
