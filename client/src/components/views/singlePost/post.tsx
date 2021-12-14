import axios from 'axios';
import { useEffect } from 'react';
import './post.scss';
import { FaStar } from 'react-icons/fa';

export default function Post(props:any)  {

    const { postData } = props;

    function TagList() {
        if (postData.tags) {
            for (let i = 0; i < 5; i++) {
                return(
                <li>{postData.tags[i].tag_name}</li>)
            }
        }
    }    

    return  (
        <div className='post'>
            <section className='report-info'>
                <h3 className='report-description'>{postData.description}</h3>
                <h4 className='report-name-date'>by {postData.user_id} on {postData.timeSeen}</h4>
            </section>
            <p className='report'>{postData.report}</p>
            <ul className='tags-list'>
                {/* {postData.tags.forEach((tag:any) => {
                    console.log(tag.name)
                })} */}
            </ul>
            <FaStar 
            className='star-icon'
            // onClick if !favorited by user, add this post to user's favorites
            //          if favorited by user, remove this post from user's favorites
            />
        </div>
    )}