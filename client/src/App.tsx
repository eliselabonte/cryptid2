import React, {Fragment, useState} from 'react';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.scss';

function App() {
  const [navOpen, setNavOpen] = useState<Boolean>(false);
  return (
    // react fragment allows us to group our sections under one parent (as per React) w/o creating a new div
    // (good practice to limit extraneous divs)
    <Fragment>
      <Intro />
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <Main/>
    </Fragment>
  );
}

export default App;
