import React from 'react'
import TechStack_Section from './TechStack_section'

const techStack = [
  'JavaScript',
  'Node.js',
  'Express',
  'React',
  'HTML',
  'CSS',
  'Sequelize',
  'PostgreSQL',
  'PouchDB',
  'CouchD',
  'A/B testing - Twilio',
  'Git and Github',
  'PHP',
  'CodeIgniter',
  'Java',
  'SQL',
  'jQuery',
  'Firebase',
  'React Native',
  'Webpack',
  'Webscraping',
  'Chai',
  'Mocha',
  'Jasmine',
  'Heroku',
  'CI / CD with Travis CI',
  'Google Extensions',
  'TDD'
];

const colaborative_tools = [
  'Jira',
  'Slack',
  'GitHub Projects',
  'Trello',
  'Microsoft Teams',
]
const linh = "hello"
export default function TechStack() {
  return (
    <div>
      <TechStack_Section technologies={techStack} tools={colaborative_tools} />
    </div>
  )
}
