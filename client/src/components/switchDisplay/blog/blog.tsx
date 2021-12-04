import './blog.scss';
import React from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Categories } from '../../devData/categories';
import { Posts } from '../../devData/posts';
import { Tags } from '../../devData/tags';
import { Users } from '../../devData/user';

export default function Blog(props:any) {   

    const {category} = props;
    let cat_id:number
    let thesePosts = [{}]

    Categories.forEach((cat) => {
        if (cat.category_name === category) {
            cat_id = cat.id
        }
    })

    Posts.map((post) => {
        if(post.category_id === cat_id) {
            let username
            let tagName
            Users.forEach((user) => {
                if (user.id === post.user_id)   {
                    username = user.username
                }
            })

            Tags.forEach((tag) => {
                if (tag.id === post.tag_id) {
                    tagName = tag.tag_name
                }
            })

            let id = post.id;
            let user = username;
            let desc = post.description;
            let report = post.report;
            let location = post.location;
            let tag = tagName

            const singlePost = { 
                id:id, 
                user: user, 
                description: desc, 
                report:report, 
                location:location, 
                tag:tag }
            thesePosts.push(singlePost) 
        }
    })
    thesePosts.shift()
    console.log(thesePosts)

    return  (
        // this is for all posts or a specific category
        <div className='blog'>
            <h2 className='blog-title'>{category} reports</h2>
            {thesePosts.map((post:any) => {
                return(
                    <div className='report' key={post.id}>
                        <section className='report-info'>
                            <h3 className='report-title'>{post.description}</h3>
                            <h4 className='report-name-date'>by {post.user} on Date</h4>
                        </section>
                        <p className='report'>{post.report}</p>
                        {/* maybe don't need to render the tags list? */}
                        <div className='report-bottom'>
                            <ul className='tags-list'>
                                <li>#{post.tag}</li>
                            </ul>
                            <FaStar 
                            className='star-icon'
                            // onClick if !favorited by user, add this post to user's favorites
                            //          if favorited by user, remove this post from user's favorites
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
