import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import TechStack from './components/tech/TechStack'
import AllProjects from './components/projects/AllProjects'
ReactDOM.render(
  <div>
    <Navbar />
    <About />
    <Contact />
    <TechStack />
    <AllProjects/>
  </div>,
  document.getElementById('app')
);
