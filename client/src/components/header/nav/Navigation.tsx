import './navigation.scss';
import { Link } from 'react-router-dom';
// import React from 'react';

export default function Navigation(props:any)   {
    const { navOpen, setDisplay } = props;

    return (
        <nav className={`Nav ${navOpen ? '' : 'hidden'}`}>
            <ul className='nav-list'>
                {/* TODO: list functionality */}
                <li className='navbtn' >
                    <Link to='/profile/:id'>Profile</Link>
                </li>
                <li className='navbtn' >
                    <Link to='/blog/:id'>Blog</Link>
                </li>
                <li className='navbtn' >
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='navbtn'>
                    <Link to='/create'>Report a Sighting</Link>
                </li>
            </ul>
        </nav>
    )
}