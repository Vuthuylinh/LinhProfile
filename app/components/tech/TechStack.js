import React from 'react'
import TechStack_Section from './TechStack_section'
import linhCali from '../../media/cali.jpg'
import technologiesList from './Technologies_data'
const techStack = technologiesList.techStack;
const colaborative_tools = technologiesList.colaborative_tools;
export default function TechStack() {
  return (
    <div className='techStack'>
      <TechStack_Section technologies={techStack} tools={colaborative_tools} />
      <img id="techPicture" src={linhCali} />
    </div>
  )
}