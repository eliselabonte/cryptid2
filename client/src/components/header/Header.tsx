import './header.scss';
import Trees from '../../images/trees.png'
import Navigation from './nav/Navigation';

export default function Header(props: any) {
    const { navOpen, setNavOpen } = props;

    return (
        <header className='header'>
        <img src={Trees} className='trees' alt='a dark blue treeline'/>
            <div onClick={() => setNavOpen(!navOpen)} className={`hamburger ${navOpen ? 'active' : ''}`}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>
        <Navigation navOpen={navOpen}/>
        </header>
    )
}