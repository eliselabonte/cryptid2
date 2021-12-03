import './header.scss';
import Trees from '../../images/trees.png';
import Searchbar from './search/Searchbar';
import Hamburger from './hamburger/Hamburger';
import Navigation from './nav/Navigation';
// added auth 0
import AuthNav from './login/auth-nav';


export default function Header(props: any) {
    const { navOpen, setNavOpen, search, setSearch } = props;

    // const { loginWithRedirect, logout, user, isLoading } = useAuth0();

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
                    <AuthNav/>
                </div>
            </section>
            <Navigation 
            navOpen={navOpen}/>
        </header>
    )
}