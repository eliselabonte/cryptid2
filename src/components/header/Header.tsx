import './header.scss';
import Trees from '../../images/trees.png'

export default function Header() {
    return (
        <header className='header'>
            <img src={Trees} className='trees' alt='a dark blue treeline'/>
        </header>
    )
}
