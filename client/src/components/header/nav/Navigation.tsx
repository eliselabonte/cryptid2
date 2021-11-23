import './navigation.scss';
// import React from 'react';

export default function Navigation(props:any)   {
    const { navOpen } = props;

    return (
        <nav className={`Nav ${navOpen ? '' : 'hidden'}`}>
            <ul className='nav-list'>
                {/* TODO: list functionality */}
                
                <li className="navbtn" onClick={() => props.handlePageChange('Portfolio')}>
                    Dashboard
                </li>
                <li className="navbtn" onClick={() => props.handlePageChange('Contact')}>
                    Login
                </li>
            </ul>
        </nav>
    )
}