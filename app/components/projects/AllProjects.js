import React from 'react'
import projects_List from './ProjectList'
import Single_Project from './Single_Project'

const AllProjects = () => {
  return (
    <section id='all_projects'>
      <h2>PROJECTS</h2>
      <div className='single_project'>
        {
          projects_List.map((project) => (
            <Single_Project key={project.projectNo} project_content={project} />
          ))
        }

      </div>
    </section>
  )
}

export default AllProjects
