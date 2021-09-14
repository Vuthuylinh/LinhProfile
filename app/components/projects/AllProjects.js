import React from 'react'
import projects_List from './ProjectList'
import Single_Project from './Single_Project'

const AllProjects = () => {
  return (
    <section className='all_projects'>
      <h2>PROJECTS</h2>
      <div className='single_project'>
        {
          projects_List.map((project) => (
            <Single_Project />
          ))
        }

      </div>
    </section>
  )
}

export default AllProjects
