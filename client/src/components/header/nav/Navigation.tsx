import './navigation.scss';
// import React from 'react';

export default function Navigation(props:any)   {
    const { navOpen, setDisplay } = props;

    return (
        <nav className={`Nav ${navOpen ? '' : 'hidden'}`}>
            <ul className='nav-list'>
                {/* TODO: list functionality */}
                <li className="navbtn" onClick={() => setDisplay('Profile')}>
                    <a href='#scrollDown'>Profile</a>
                </li>
                <li className="navbtn" onClick={() => setDisplay('Blog')}>
                    <a href='#scrollDown'>Blog</a>
                </li>
                <li className="navbtn" onClick={() => setDisplay('Dashboard')}>
                    <a href='#scrollDown'>Dashboard</a>
                </li>
            </ul>
        </nav>
    )
}