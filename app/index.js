import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import TechStack from './components/tech/TechStack'
import AllProjects from './components/projects/AllProjects'
import All_Experiences from './components/experiences/All_Experiences'
ReactDOM.render(
  <div>
    <Navbar />
    <About />
    <Contact />
    <TechStack />
    <AllProjects />
    <All_Experiences />
  </div>,
  document.getElementById('app')
);
