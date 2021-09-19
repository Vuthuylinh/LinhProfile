import React from 'react'
import experience_List from './experience_List'
import Single_Experience from './Single_Experience'
const All_Experiences = () => {
  return (
    <section id='all_experiences'>
      <h2>EXPERIENCE</h2>
      <div >
        {
          experience_List.map((experience) => (
            <Single_Experience key={experience.experienceNo} experience_info={experience} />
          ))
        }
      </div>
    </section>
  )
}
export default All_Experiences
