import { Fragment, useState } from 'react';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './layout.scss';

export default function Layout(props: any) {
  const { search, 
    setSearch, 
    postId, 
    setPostId, 
    postData, 
    category, 
    blogPosts, 
    userExists, 
    setUserExists } = props;

  const [navOpen, setNavOpen] = useState<boolean>(false);

  const [home, setHome] = useState<boolean>(true);
  // TODO: set this ^ variable to false any time we are not on home page?

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
        setHome={setHome} 
        userExists={userExists}
        setUserExists={setUserExists}
        postData={postData}
        postId={postId}
        setPostId={setPostId}
        category={category}
        blogPosts={blogPosts}
        />
    </Fragment>
  );
}