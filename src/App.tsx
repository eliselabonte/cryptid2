import React from 'react';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import About from './components/about/About';
import './App.scss';

function App() {
  return (
    <body>
      <Intro />
      <Header />
      <About />
    </body>
  );
}

export default App;
