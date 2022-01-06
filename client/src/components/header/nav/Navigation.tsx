import './navigation.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import React from 'react';

export default function Navigation(props:any)   {
    const navigate = useNavigate();
    const { navOpen } = props;
    const {user} = useAuth0();
    const username = user?.nickname

    function link(name?:string) {
        if (name) {
            navigate (`/profile/${name}`, {replace:true})
        }
        else {
            window.alert('please log in to view profile.')
        }
        
    }

    return (
        <nav className={`Nav ${navOpen ? '' : 'hidden'}`}>
            <ul className='nav-list'>
                {/* TODO: fix this below */}
                <li className='navbtn' onClick={() => {link(username)}}>
                    Profile
                </li>
                {/* <li className='navbtn' >
                    <Link to='/blog/'>Blog</Link>
                </li> */}
                {/* <li className='navbtn' >
                    <Link to='/dashboard'>Dashboard</Link>
                </li> */}
                <li className='navbtn'>
                    <Link to='/create'>Report a Sighting</Link>
                </li>
            </ul>
        </nav>
    )
}