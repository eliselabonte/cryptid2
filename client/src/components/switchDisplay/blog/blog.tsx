import './blog.scss';
import React from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

export default function Blog() {   

    return  (
        // this is for all posts or a specific category
        <div className='blog'>
            <h2 className='blog-title'>UFO Reports</h2>
            <div className='report'>
                <section className='report-info'>
                    <h3 className='report-title'>Report Title</h3>
                    <h4 className='report-name-date'>by Name on Date</h4>
                </section>
                <p className='report'></p>
                {/* maybe don't need to render the tags list? */}
                <div className='report-bottom'>
                    <ul className='tags-list'>
                        <li className='report-tag'>#tag</li>
                        <li className='report-tag'>#tag</li>
                        <li className='report-tag'>#tag</li>
                        <li className='report-tag'>#tag</li>
                    </ul>
                    <FaStar 
                    className='star-icon'
                    // onClick if !favorited by user, add this post to user's favorites
                    //          if favorited by user, remove this post from user's favorites
                    />
                </div>
            </div>
        </div>
    )
}
