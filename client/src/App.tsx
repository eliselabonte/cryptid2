import React, {Fragment, useState} from 'react';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import About from './components/about/About';
import './App.scss';

function App() {
  const [navOpen, setNavOpen] = useState<Boolean>(false);
  return (
    // react fragment allows us to group our sections under one parent (as per React) w/o creating a new div
    // (good practice to limit extraneous divs)
    <Fragment>
      <Intro />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <About />
      </main>
    </Fragment>
  );
}

export default App;
