import './header.scss';
import Trees from '../../images/trees.png';
import Searchbar from './search/Searchbar';
import Hamburger from './hamburger/Hamburger';
import Navigation from './nav/Navigation';

export default function Header(props: any) {
    const { navOpen, setNavOpen, display, setDisplay } = props;

    return (
        <header className='header'>
            <img src={Trees} className='trees' alt='a dark blue treeline'/>
            <section className='top'>
                <Searchbar />
                <div className='burger-links'>
                    <Hamburger 
                    navOpen={navOpen} 
                    setNavOpen={setNavOpen}/>
                    <a href='#scrollDown' className='login-button' onClick={() => setDisplay('Authentication')}>Log In</a>
                </div>
            </section>
            <Navigation 
            navOpen={navOpen}
            setDisplay={setDisplay}/>
        </header>
    )
}