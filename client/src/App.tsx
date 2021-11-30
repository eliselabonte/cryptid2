import React, { Fragment, useState } from 'react';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.scss';
import Auth0ProviderWithHistory from './auth0Provider';

function App() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const [display, setDisplay] = useState('Homepage');

  return (
    <Auth0ProviderWithHistory>
      <Intro />
        <Header 
        // useContext for navOpen and display
        navOpen={navOpen} 
        setNavOpen={setNavOpen} 
        display={display}
        setDisplay={setDisplay}/>
        <Main 
        display={display}
        setDisplay={setDisplay}/>
    </Auth0ProviderWithHistory>
  );
}

export default App;
