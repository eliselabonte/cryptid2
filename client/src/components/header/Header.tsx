import './header.scss';
import Trees from '../../images/trees.png';
import Searchbar from './search/Searchbar';
import Hamburger from './hamburger/Hamburger';
import Navigation from './nav/Navigation';
import { useAuth0 } from "@auth0/auth0-react";


export default function Header(props: any) {
    const { navOpen, setNavOpen, search, setSearch } = props;

    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    return (
        <header className='header'>
            <img src={Trees} className='trees' alt='dark blue treeline'/>
            <section className='stationary'>

                <Searchbar 
                search={search}
                setSearch={setSearch}/>

                <div className='burger-links'>
                    <Hamburger 
                    navOpen={navOpen} 
                    setNavOpen={setNavOpen}/>
                    {/* <a href='#scrollDown' 
                    className='login-button' 
                    onClick={() => setDisplay('Authentication')}>Log In</a> */}
                    
                    {/* auth 0 button */}
                    {!isLoading && !user && (
                    <button
                        className={ navOpen ? 'login-button open' : 'login-button'}
                        onClick={() => loginWithRedirect()}> 
                        Log In
                    </button>
                    )}
                    {!isLoading && user && (
                    <button
                        className={ navOpen ? 'login-button open' : 'login-button'}
                        onClick={() => logout()}> 
                        Log Out
                    </button>
                    )}
                </div>
            </section>
            <Navigation 
            navOpen={navOpen}/>
        </header>
    )
}