import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About'
import Navbar from './components/Navbar'
ReactDOM.render(
  <div>
    <Navbar />
    <About />
  </div>,
  document.getElementById('app')
);
