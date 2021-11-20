import './navigation.scss';

export default function Navigation(props:any)   {
    const { navOpen } = props;

    return (
        <nav className={`Nav ${navOpen ? '' : 'hidden'}`}>
            <ul className='nav-list'>
                {/* TODO: list functionality */}
                <li id="small-text" className="navbtn btn col 4 light-blue darken-3" onClick={() => props.handlePageChange('AboutMe')}>
                    Home
                </li>
                <li id="small-text" className="navbtn btn col 4 light-blue darken-3" onClick={() => props.handlePageChange('Portfolio')}>
                    Dashboard
                </li>
                <li id="small-text" className="navbtn btn col 4 light-blue darken-3" onClick={() => props.handlePageChange('Contact')}>
                    Unknown
                </li>
            </ul>
        </nav>
    )
}