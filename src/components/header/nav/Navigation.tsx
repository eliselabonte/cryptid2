import './navigation.scss';

export default function Navigation(props:any)   {
    const { navOpen } = props;

    return  (
        <nav className={`Nav ${navOpen ? '' : 'hidden'}`}>
            <ul className='nav-list'>
                {/* TODO: list functionality */}
                <li><a href='#'>Log In</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Unknown</a></li>
            </ul>
        </nav>
    )
}