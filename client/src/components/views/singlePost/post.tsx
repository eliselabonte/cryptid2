import axios from 'axios';
import { useEffect } from 'react';
import './post.scss';

export default function Post(props:any)  {

    const { postId, setPostId, postData } = props;

    // TODO: Route for single post at '/posts/:id'
    //       define prop types
    console.log(postData)
    console.log(postData.tags)
    // console.log(postData.tags[0].tag_name)
    function TagList() {
        if (postData.tags) {
            for (let i = 0; i < 5; i++) {
                return(
                <li>{postData.tags[i].tag_name}</li>)
            }
        }
    }    

    // TODO: if more than one post, map posts

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
        </div>
    )}