import './main.scss';
import React, { useState } from 'react';
import Homepage from './homepage/Homepage';
import Authentication from './auth/Authentication';
import Blog from './blog/blog';
import Dashboard from './dashboard/Dashboard';
import SearchLanding from './searchLanding/SearchLanding';
import Creatures from './creature/Creatures';
import Profile from './profile/Profile';

export default function Main(props:any) {
    const {display, setDisplay} = props;
    
    return (
        <main className='main'>
            {/* toggle className 'homepage'  on h1 and h2 elements for  homepage display*/}
            <a href='#top'>
                <h1 
                className={display === 'Homepage' ? 'cryptid homepage' : 'cryptid'} 
                onClick={() => setDisplay('Homepage')}>CRYPT-ID</h1>
            </a>
            <h2 className={display === 'Homepage' ? 'tagline homepage' : 'tagline'}>a place for believers, theorists, and those who have seen the unexplainable....</h2>
            <span id='scrollDown'></span>
            { display === 'Homepage' ? <Homepage /> : null }
            { display === 'Blog' ? <Blog /> : null }
            { display === 'Authentication' ? <Authentication /> : null }
            { display === 'Profile' ? <Profile /> : null }
            { display === 'Creatures' ? <Creatures /> : null }
            { display === 'SearchLanding' ? <SearchLanding /> : null }
            { display === 'Dashboard' ? <Dashboard /> : null }
            {/* the section below can be toggled on and off to view imported fonts. (for dev only) */}
            {/* <div className='fonts'>
                <p className='title'>title</p>
                <p className='body'>body</p>
                <p className='sketchy'>sketchy</p>
                <p className='other'>other</p>
            </div> */}
        </main>
    )
}
