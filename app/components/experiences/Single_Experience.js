import React from 'react'

const Single_Experience = (props) => {
  const experienceNo = props.experienceNo;
  const {
    title,
    company,
    logo,
    description,
    duties,
    timeranges,
    job,
    learn_from_work } = props.experience_info
    return(
      <div className="single_experience">
        <h2>{title}</h2>
        <h2>{company}</h2>
        <h2>{timeranges}</h2>
        <h2>{logo}</h2>
        <h2>{description}</h2>
        <h2>{learn_from_work}</h2>
        {/* <h2>{job}</h2> */}
        <ul>
          {
            duties.map((duty)=>(
              <li>{duty}</li>
            ))
          }
        </ul>
      </div>
    )
}

export default Single_Experience
