import './main.scss';
import React, { useState } from 'react';
import Homepage from './homepage/Homepage';
import Authentication from './auth/Authentication';
import Blog from './blog/blog';

export default function Main(props:any) {
    const {display} = props;
    
    return (
        <main>
            {/* toggle className 'homepage'  on h1 and h2 elements for  homepage display*/}
            <h1 className='cryptid'>CRYPT-ID</h1>
            <h2 className="tagline">a place for believers, theorists, and those who have seen the unexplainable....</h2>
            { display === 'Homepage' ? <Homepage /> : null }
            { display === 'Blog' ? <Blog /> : null }
            { display === 'Authentication' ? <Authentication /> : null }
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
