import './navigation.scss';
// import React from 'react';

export default function Navigation(props:any)   {
    const { navOpen, setDisplay } = props;

    return (
        <nav className={`Nav ${navOpen ? '' : 'hidden'}`}>
            <ul className='nav-list'>
                {/* TODO: list functionality */}
                
                <li className="navbtn" onClick={() => setDisplay('Dashboard')}>
                    Dashboard
                </li>
                <li className="navbtn" onClick={() => setDisplay('Authentication')}>
                    Login
                </li>
            </ul>
        </nav>
    )
}