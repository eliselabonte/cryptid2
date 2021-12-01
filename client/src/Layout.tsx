import { Fragment, useState } from 'react';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './layout.scss';
// import Auth0ProviderWithHistory from './auth0Provider';

function Layout(props: any) {
  const { search, setSearch } = props;

  const [navOpen, setNavOpen] = useState<boolean>(false);

  const [home, setHome] = useState<boolean>(true);

  // how to set this variable to false any time we are not on home page?

  return (
    <Fragment>
      <Intro />
      <Header
        // useContext for navOpen and display
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        search={search}
        setSearch={setSearch} />
      <Main
        home={home}
        setHome={setHome} />
    </Fragment>
  );
}

export default Layout;
