import './navigation.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import React from 'react';

export default function Navigation(props:any)   {
    const navigate = useNavigate();
    const { navOpen } = props;
    const {user, isAuthenticated} = useAuth0();
    const username = user?.nickname

    function link(destination:string, name?:string) {
        if (isAuthenticated) {
            if(destination==='profile') {
                navigate(`/${destination}/${name}`, {replace:true})
            }
            if (destination==='create') {
                navigate(`/${destination}`)
            }
        }
        else {
            window.alert('please log in to view profile or create report')
        }
        
    }

    return (
        <nav className={`Nav ${navOpen ? '' : 'hidden'}`}>
            <ul className='nav-list'>
                {/* TODO: fix this below */}
                <li className='navbtn' onClick={() => {link('profile', username)}}>
                    Profile
                </li>
                {/* <li className='navbtn' >
                    <Link to='/blog/'>Blog</Link>
                </li> */}
                {/* <li className='navbtn' >
                    <Link to='/dashboard'>Dashboard</Link>
                </li> */}
                <li className='navbtn' onClick={() => {link('create')}}>Report a Sighting</li>
            </ul>
        </nav>
    )
}