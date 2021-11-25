import React, { Fragment, useState } from 'react';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.scss';
import Auth0ProviderWithHistory from './auth0Provider';

function App() {
  const [navOpen, setNavOpen] = useState<Boolean>(false);

  const [display, setDisplay] = useState('Homepage');
  return (
    <Auth0ProviderWithHistory>
    // react fragment allows us to group our sections under one parent (as per React) w/o creating a new div

    // (good practice to limit extraneous divs)
    <Fragment>
      <Intro />
      <Header 
      navOpen={navOpen} 
      setNavOpen={setNavOpen} 
      display={display}
      setDisplay={setDisplay}/>
      <Main 
      display={display}
      setDisplay={setDisplay}/>
    </Fragment>
    </Auth0ProviderWithHistory>

  );
}

export default App;
