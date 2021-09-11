import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import TechStack from './components/TechStack'

ReactDOM.render(
  <div>
    <Navbar />
    <About />
    <Contact />
    <TechStack />
  </div>,
  document.getElementById('app')
);
