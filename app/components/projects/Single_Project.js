import React from 'react'

const Single_Project = (props) => {
  const projectNo = props.project_content.projectNo;
  const { name, media, link_demo, url_demo, link_github, url_github, description, techStack } = props.project_content
  return (
    <article>
      <h1>{name}</h1>
      <div>
        <div>{media}</div>
        <div>
          <h4>{link_demo}</h4>
          <h4>{url_demo}</h4>
        </div>
        <div>
          <h4>{link_github}</h4>
          <h4>{url_github}</h4>
        </div>
        <p>{description}</p>
        <br />
        <p>{techStack}</p>
      </div>
    </article>
  )

}
export default Single_Project
