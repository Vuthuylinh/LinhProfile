import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
ReactDOM.render(
  <div>
    <Navbar />
    <About />
    <Contact />
  </div>,
  document.getElementById('app')
);
